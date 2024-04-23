import React from 'react'
import WorkCard from '../components/WorkCard'
import { work } from '../constants'
const Work = () => {
    return (
        <section id='work' className='w-full min-h-screen flex flex-col justify-center items-center mt-10' >
            <div className='flex flex-col justify-end text-center mx-auto text-white'>
                <h1 className='font-semibold text-4xl mb-1'>Work</h1>
                <hr className='border-1 border-violet-800' />
                <h2 className='text-slate-400 text-sm py-6'>Check out some of my work</h2>
            </div>
            <div className='flex flex-wrap max-w-[800px] gap-10'>
                {work.map((item, index) => (
                    <WorkCard key={index} item={item} />
                ))}
            </div>
        </section>
    )
}

export default Work