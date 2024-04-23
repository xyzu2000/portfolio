import React from 'react'

const About = () => {
    return (
        <section id='about' className='w-full min-h-screen flex max-sm:flex-col items-center justify-center px-20 max-sm:px-5 xl:px-32'>
            <div className='sm:flex-1 flex flex-col items-end max-sm:text-center text-right sm:mr-5 text-white max-sm:items-center'>
                <h1 className='font-semibold text-4xl'>
                    About
                </h1>
                <hr className='border-1 border-violet-600  w-[110px]' />
                <h2 className='text-md font-semibold'>Hi. I'm Bartosz, nice to meet you. Please take a look around</h2>
            </div>
            <div className='max-sm:text-center text-left sm:flex-1  text-slate-400 text-md '>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti in vitae eligendi ipsam. Veritatis quos eaque sequi repellat est consequuntur molestiae! A in adipisci quo repudiandae minus nesciunt eos dolorum?
            </div>
        </section>
    )
}

export default About