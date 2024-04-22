import React from 'react'
import TechCard from '../components/TechCard'
import { technologies } from '../constants'

const Experience = () => {
    return (
        <section id='experience' className='w-full min-h-screen flex flex-col justify-center items-center ' >
            <div className='flex flex-col justify-end text-center mr-5 text-white'>
                <div className='my-3'>
                    <h1 className='font-semibold text-4xl mb-1'>Experience</h1>
                    <hr className='border-1 border-violet-800' />
                </div>
                <h2 className='text-slate-400 text-sm'>These are technologies I'am familiar with</h2>
            </div>
            <div className='grid grid-cols-4 gap-10 mt-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
                {technologies.map((item) => (
                    <TechCard key={item.label} item={item} />
                ))}
            </div>
        </section>
    )
}

export default Experience