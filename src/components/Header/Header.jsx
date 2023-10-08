import React from 'react';
import { Link, Outlet, useLoaderData } from 'react-router-dom';
import logo from '../../assets/images/Logo.svg'

const Header = () => {
    
    return (
        <div >
            <div className='flex justify-between items-center bg-slate-800 p-4 mb-4 rounded-xl'>
                <img src={logo} alt="" />
                <nav>
                    <Link className='text-white p-2' to='/'>Shop</Link>
                    <Link className='text-white p-2' to='/orders'>Orders</Link>
                    <Link className='text-white p-2' to='/inventory'>Inventory</Link>
                    <Link className='text-white p-2' to='/login'>Login</Link>
                </nav>
            </div>
        </div>
    );
};

export default Header;