import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext'

const MyAppointments = () => {
    const { doctors } = useContext(AppContext)
    return (
        <div>
            <p className='pb-3 mt-12 font-medium text-zinc-800 border-b'>My Appointment</p>
            <div>
                {doctors.slice(0, 3).map((item, index) => (
                    <div
                    className='flex flex-col sm:flex sm:flex-row sm:gap-6 py-2 border-b'
                    key={index}>
                        <div>
                            <img 
                            className='w-full md:w-32 bg-indigo-50'
                            src={item.image} alt="Doctor's Image" />
                        </div>
                        <div className='flex-1 text-sm text-zinc-600'>
                            <p className='text-neutral-800 font-semibold'>{item.name}</p>
                            <p>{item.speciality}</p>
                            <p className='text-neutral-900 font-medium mt-1'>Address:</p>
                            <p className='text-xs'>{item.address.line1}</p>
                            <p className='text-xs'>{item.address.line2}</p>
                            <p className='text-xs mt-1'><span className='text-sm text-neutral-900 font-medium'>Date & Time: </span>25 July 2025 | 8.30 PM</p>
                            <div className='flex flex-col gap-3 sm:hidden mt-4'>
                                <button className='text-sm text-stone-500 text-center w-full py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
                                <button className='text-sm text-stone-500 text-center w-full py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel Appointment</button>
                            </div>
                        </div>
                        <div className='hidden sm:block'>
                            <div className='flex flex-col gap-3 items-center justify-center'>
                                <button className='text-sm text-stone-500 text-center w-36 py-2 border rounded hover:bg-primary hover:text-white transition-all duration-300'>Pay Online</button>
                                <button className='text-sm text-stone-500 text-center w-36 py-2 border rounded hover:bg-red-600 hover:text-white transition-all duration-300'>Cancel Appointment</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyAppointments;