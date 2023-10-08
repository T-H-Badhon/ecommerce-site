import React from 'react';
import { loadLocalCart } from '../../Utility/localStorageOperation';

const OrderSummary = (props) => {
    const {cart,removeF,children}=props;
    console.log(cart);
    let no=0;
    let ammount=0;
    const savedCart=loadLocalCart();
    
    return (
        <div className='border-2 rounded-xl p-1 bg-orange-500 min-h-screen sticky top-0 flex flex-col'>
            <h1 className='text-3xl mb-3'>Order Items:</h1>
            {
                cart.map(c=> {
                    no++;
                    ammount=ammount+(c.price*savedCart[c.id]);
                    return (
                        // eslint-disable-next-line react/jsx-key
                        <div className={no%2==0?"bg-slate-200 p-1":"bg-slate-400 p-1"}>
                            <div className='grid grid-cols-12 my-1'>
                                <h1 className='col-span-1'>{no}. </h1>
                                <h1 className='col-span-7'>{c.name}</h1>
                                <h1 className='col-span-1'>{savedCart[c.id]}</h1>
                                <h1 className='col-span-2'>= ${c.price*savedCart[c.id]}</h1>
                                <div className='col-span-1'>
                                    <button onClick={()=>removeF(c.id)}>D</button>
                                </div>
                            </div>
                        </div>
                            
                    )
                    
                })
            }
            <div className='mt-auto mb-2'>
                <hr />
                <div className='flex justify-between m-2 mb-3'>
                   <h1 className='text-2xl'>Total:</h1>
                  <h1 className='text-2xl'>${ammount}</h1>
                </div>
                {children}
             </div>
       
        </div>
    );
};

export default OrderSummary;