import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import OrderSummary from '../OrderSummary/OrderSummary';
import { loadLocalCart, removeLocal } from '../../Utility/localStorageOperation';

const Orders = () => {
    const [cart,setCart]=useState([]);
    const product=useLoaderData();
    console.log(product)
    useEffect(()=>{
        const savedCart=loadLocalCart();
        let newCart=[];
        for(const id in savedCart){
            newCart.push(product.find(product=>product.id===id))
        }
        setCart(newCart);

    },[])
    const removeFCart=(id)=>{
        removeLocal(id);
        const savedCart=loadLocalCart();
        let newCart=[];
        for(const id in savedCart){
            newCart.push(product.find(product=> product.id===id))
        }
        console.log(newCart)
        setCart(newCart);
    }
    
    return (
        <div>
            <OrderSummary cart={cart} removeF={removeFCart}>
            {/* <h1 className='mb-2 px-5 py-2 text-center bg-green-400 rounded-xl'><Link to='/checkout'>Checkout</Link></h1> */}
            <Link to='/checkout'><h1 className='mb-2 px-5 py-2 text-center bg-green-400 rounded-xl'>Checkout</h1></Link>
            </OrderSummary>
        </div>
    );
};

export default Orders;