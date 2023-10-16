import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/Logo.svg'
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Button } from 'flowbite-react';

const Header = () => {

    const { user,logOut } = useContext(AuthContext)

    return (
        <div >
            <div className='flex justify-between items-center bg-slate-800 p-4 mb-4 rounded-xl'>
                <img src={logo} alt="" />
                <nav>
                    <Link className='text-white p-2' to='/'>Shop</Link>
                    <Link className='text-white p-2' to='/orders'>Orders</Link>
                    <Link className='text-white p-2' to='/inventory'>Inventory</Link>
                    {
                        user ? <><span className='text-white'>{user.email}</span> <Button className='inline' onClick={logOut} gradientDuoTone="pinkToOrange" outline>Sign out</Button></> :
                            <>
                                <Link className='text-white p-2' to='/login'>Login</Link>
                                <Link className='text-white p-2' to='/register'>Register</Link>
                            </>
                    }

                </nav>
            </div>
        </div>
    );
};

export default Header;