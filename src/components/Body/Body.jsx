import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import ShopItem from '../ShopItem/ShopItem';
import OrderSummary from '../OrderSummary/OrderSummary';
import { loadLocalCart, removeLocal, setLocalCart } from '../../Utility/localStorageOperation';

const Body = () => {
    const products= useLoaderData();
    const [cart,setCart]= useState([]);
    const addToCart=(id)=>{
        setLocalCart(id);
        const savedCart=loadLocalCart();
        let newCart=[];
        for(const id in savedCart){
            newCart.push(products.find(product=> product.id===id))
        }
        console.log(newCart)
        setCart(newCart);
    }
    const removeFCart=(id)=>{
        removeLocal(id);
        const savedCart=loadLocalCart();
        let newCart=[];
        for(const id in savedCart){
            newCart.push(products.find(product=> product.id===id))
        }
        console.log(newCart)
        setCart(newCart);
    }
    useEffect(()=>{
        const savedCart=loadLocalCart();
        let newCart=[];
        for(const id in savedCart){
            newCart.push(products.find(product=>product.id===id))
        }
        setCart(newCart);
    },[])

    return (
        <div className='grid grid-cols-6 gap-4'>
            <div className='grid grid-cols-3 gap-4 col-span-4'>
             {
                products.map(product => <ShopItem key={product.id} product={product} fn={addToCart}></ShopItem> )
             }
            </div>
            <div className='col-span-2'>
                <OrderSummary key='orderSummary' cart={cart} removeF={removeFCart}>
                <Link to='/orders'><h1 className='mb-2 px-5 py-2 text-center bg-green-400 rounded-xl'>Show Orders</h1></Link>
                </OrderSummary>
            </div>
        </div>

    );
};

export default Body;