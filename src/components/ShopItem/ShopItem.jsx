import React from 'react';

const ShopItem = (props) => {
    const {img,name,price,seller,id}=props.product;
    const {fn}=props;
    return (
        <div className='flex flex-col w-100 border-2 rounded-xl'>
            <div className='mb-5 p-2'>
                <img className='w-90 mx-auto' src={img} alt="" />
                <div>
                    <h1 className='text-2xl text-orange-500'>Price: ${price}</h1>
                    <h1 className=' text-2xl text-slate-600'>{name}</h1>
                    <p className='mx-auto text-red-600'>Seller: {seller}</p>
                </div>
                
            </div>
            <button onClick={()=>fn(id)} className='mt-auto w-100 bg-orange-400 p-2 rounded-b-xl'>Add To Cart</button>
        </div>
    );
};

export default ShopItem;