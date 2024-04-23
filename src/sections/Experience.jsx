import React from 'react'
import TechCard from '../components/TechCard'
import { technologies } from '../constants'

const Experience = () => {
    return (
        <section id='experience' className='w-full min-h-screen flex flex-col justify-center items-center ' >
            <div className='flex flex-col justify-end text-center mx-auto text-white'>
                <div className='my-3'>
                    <h1 className='font-semibold text-4xl mb-1'>Experience</h1>
                    <hr className='border-1 border-violet-800' />
                </div>
                <h2 className='text-slate-400 text-md mb-3'>These are technologies I'am familiar with</h2>
            </div>
            <div className='flex flex-wrap justify-center max-w-[800px] gap-5'>
                {technologies.map((item) => (
                    <TechCard key={item.label} item={item} />
                ))}
            </div>
        </section>
    )
}

export default Experience