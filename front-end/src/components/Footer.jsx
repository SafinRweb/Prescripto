import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
    return (
        <div className='md:mx-10'>
            <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'> 
                {/* Left-Section */}
                <div>
                    <img 
                    className='mb-5 w-40'
                    src={assets.logo} alt="Logo" />
                    <p className="text-gray-600 md:w-2/3 w-full leading-5">Your trusted healthcare platform connecting patients with experienced doctors. Book appointments easily and get the care you deserve. We pride ourselves on providing a seamless experience with our network of qualified healthcare professionals.</p>
                </div>
                {/* Center-Section */}
                <div>
                    <p className='text-xl font-medium mb-5'>Company</p>
                    <ul className='flex flex-col gap-2 mb-5 text-gray-600'>
                        <li className='cursor-pointer hover:text-black'>Home</li>
                        <li className='cursor-pointer hover:text-black'>About Us</li>
                        <li className='cursor-pointer hover:text-black'>Contact Us</li>
                        <li className='cursor-pointer hover:text-black'>Privacy Policy</li>
                    </ul>
                </div>
                {/* Right-Section */}
                <div>
                    <p className='text-xl font-medium mb-5'>Get In Touch</p>
                    <ul className='flex flex-col gap-2 mb-5 text-gray-600'>
                        <li>+1-212-39471</li>
                        <li>Prescripto@Med.com</li>
                    </ul>
                </div>
            </div>
            {/* CopyRight */}
            <div>
                <hr />
                <p className="text-gray-600 text-center py-5 text-sm">© 2025 Prescripto. All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;