import React from 'react';
import { assets } from '../assets/assets';

const Contact = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 text-gray-500'>
                <p>Contact <span className='text-gray-700'>Us</span></p>
            </div>
            <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
                <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="Contact IMG" />
                <div className='flex flex-col justify-center items-start gap-6'>
                    <p className='font-semibold text-lg text-gray-600'>Our Office</p>
                    <p className='text-gray-500'>5409 Willms Station <br /> Suite 350, Washington, USA</p>
                    <p className='text-gray-500'>Tel: (415) 555-1431 <br /> Email: Safinr.gg@gmail.com</p>
                    <p className='font-semibold text-lg text-gray-600'>Carrers at Prescripto</p>
                    <p className='text-gray-500'>Learn more about our teams and job openings.</p>
                    <button className='bg-primary text-white px-8 py-3 rounded-full font-sm cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out'>Explore Jobs</button>
                </div>
            </div>
        </div>
    );
};

export default Contact;