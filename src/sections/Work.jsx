import React from 'react'
import WorkCard from '../components/WorkCard'
import { work } from '../constants'
const Work = () => {
    return (
        <section id='work' className='z-40 w-full min-h-screen flex flex-col justify-center items-center' >
            <div className='flex flex-col justify-end text-center mr-5 text-white'>
                <div className='my-3'>
                    <h1 className='font-semibold text-4xl mb-1'>Work</h1>
                    <hr className='border-1 border-violet-800' />
                </div>
                <h2 className='text-slate-400 text-sm'>Check out some of my work</h2>
            </div>
            <div className='grid grid-cols-4 gap-10 mt-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
                {work.map((item) => (
                    <WorkCard key={item.img} item={item} />
                ))}
            </div>
        </section>
    )
}

export default Work