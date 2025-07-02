import React, { useState } from 'react';
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router';

const Navbar = () => {
    const navigate = useNavigate();
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    return (
        <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
            <img onClick={() => navigate('/')} className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />
            <ul className='hidden md:flex items-start font-medium gap-5'>
                <NavLink to='/'>
                    <li className='py-1'>Home</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/doctors'>
                    <li className='py-1'>All Doctors</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/about'>
                    <li className='py-1'>About</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to='/contact'>
                    <li className='py-1'>Contact</li>
                    <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>
            <div className='flex items-center gap-4'>
                {
                    token
                        ? <div className='flex items-center gap-2 cursor-pointer relative group'>
                            <img
                                className='w-8 rounded-full'
                                src={assets.profile_pic} alt="ProfilePic" />
                            <img
                                className='w-2.5'
                                src={assets.dropdown_icon}
                                alt="Nav" />
                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                <div className='min-w-48 bg-stone-100  rounded flex flex-col gap-4 p-4'>
                                    <p
                                        onClick={() => navigate('my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                    <p
                                        onClick={() => navigate('/my-appointment')}
                                        className='hover:text-black cursor-pointer'>My Appointments</p>
                                    <p
                                        onClick={() => setToken(false)}
                                        className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        </div>
                        : <button
                            onClick={() => navigate('/login')}
                            className='bg-primary text-white px-8 py-3 rounded-full font-light hidden md:block cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'>Create Account</button>
                }
                <img onClick={()=>setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="Menu" />
                {/* Mobile Menu */}
                <div className={`fixed top-0 left-0 w-full h-full z-50 bg-white transition-opacity duration-300 ${showMenu ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} md:hidden`}>
                    <div className='flex items-center justify-between px-5 py-6'>
                        <img className='w-36' src={assets.logo} alt="" />
                        <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="" />
                    </div>
                    <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
                        <NavLink onClick={()=>setShowMenu(false)} to='/'><p className='px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 w-full text-center'>Home</p></NavLink>
                        <NavLink onClick={()=>setShowMenu(false)} to='/doctors'><p className='px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 w-full text-center'>All Doctors</p></NavLink>
                        <NavLink onClick={()=>setShowMenu(false)} to='/about'><p className='px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 w-full text-center'>About</p></NavLink>
                        <NavLink onClick={()=>setShowMenu(false)} to='/contact'><p className='px-6 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 w-full text-center'>Contact</p></NavLink>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;