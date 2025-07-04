import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router';

const RelativeDoctors = ({speciality,docId}) => {
    const {doctors} = useContext(AppContext)
    const [relDoc, setRelDoc] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        if(doctors.length > 0 && speciality) {
            const doctorsData = doctors.filter((doc)=> doc.speciality === speciality && doc._id != docId)
            setRelDoc(doctorsData)
        }
    },[doctors,speciality,docId])

    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
        <h1 className='text-3xl font-medium'>Relative Doctors</h1>
        <p className='sm:w-1/3 text-center text-sm'>We have got the Best Doctors in Town.</p>
        <div className='w-full grid grid-cols-auto pt-5 gap-4 gap-y-6 px-3 sm:px-0'>
            {relDoc.slice(0, 5).map((item, index) => (
                <div 
                onClick={()=>{navigate(`/appointment/${item._id}`); scrollTo(0,0)}}
                className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500'
                key={index}>
                    <img
                    className='bg-blue-50'
                    src={item.image} alt="" />
                    <div className='p-4'>
                        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
                            <p className='w-2 h-2 bg-green-500 rounded-full'></p>
                            <p>Available</p>
                        </div>
                        <p className='text-lg font-medium text-gray-900'>{item.name}</p>
                        <p className='text-gray-600 text-sm'>{item.speciality}</p>
                    </div>
                </div>
            ))}
        </div>
        <button 
        onClick={()=>{navigate('/doctors'); scrollTo(0,0)}}
        className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10 cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out sm:text-base'>More</button>
    </div>
    );
};

export default RelativeDoctors;