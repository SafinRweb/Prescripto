import React from 'react';
import { assets } from '../assets/assets';

const About = () => {
    return (
        <div>
            <div className='text-center text-2xl pt-10 text-gray-500'>
                <p>About <span className='text-gray-700 font-medium'>Us</span></p>
            </div>
            <div className='my-10 flex flex-col md:flex-row gap-12'>
                <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="About image" />
                <div className='flex flex-col justify-center gap-6 md:w-2/3 text-sm text-gray-600'>
                    <p>Welcome to Prescripto, your premier destination for hassle-free online doctor bookings. We're revolutionizing the way you access healthcare by providing a seamless digital platform that connects patients with qualified medical professionals.</p>
                    <p>Our mission is to eliminate the traditional barriers to healthcare access, making it easier than ever to find the right doctor, schedule appointments, and manage your health journey. With our extensive network of experienced physicians across various specialties, from general practitioners to specialized consultants, we ensure that quality healthcare is just a few clicks away. Whether you need a routine checkup, specialist consultation, or urgent medical attention, our user-friendly platform is designed to streamline your healthcare experience.</p>
                    <b className='text-gray-800'>Our vision</b>
                    <p>Lets create a world where quality healthcare is accessible to everyone, everywhere. We strive to build a future where technology bridges the gap between patients and healthcare providers, ensuring timely and efficient medical care for all. Through continuous innovation and dedication to excellence, we're committed to transforming healthcare delivery and improving patient outcomes across the globe.</p>
                </div>
            </div>
            <div className='text-xl my-4'>
                <p>Why <span className='text-gray-700 font-semibold'>Choose Us</span></p>
            </div>
            <div className='flex flex-col md:flex-row mb-20'>
                <div className='border border-gray-500 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all cursor-pointer duration-300 text-gray-600'>
                    <b>Efficiency:</b>
                    <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
                </div>
                <div className='border border-gray-500 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all cursor-pointer duration-300 text-gray-600'>
                    <b>Convenience:</b>
                    <p>Access to a network of the trusted healthcare professionals in your area.</p>
                </div>
                <div className='border border-gray-500 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all cursor-pointer duration-300 text-gray-600'>
                    <b>Personalization:</b>
                    <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
                </div>
            </div>
        </div>
    );
};

export default About;