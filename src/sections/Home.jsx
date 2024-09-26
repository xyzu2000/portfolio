import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    return (
        <section name='home' className='w-full h-screen text-slate-400 '>
            <div className='max-w-screen-lg m-auto'>
                <h1 className='text-white text-4xl font-semibold'>
                    Bartosz Wojnarowicz
                    <hr className='border-2 border-violet-800 shadow-2xl shadow-violet-100 max-w-[350px]' />
                </h1>
                <h2 class="text-xl font-bold text-left mt-8 mb-4">
                    I'm a Computer Engineering graduate with a strong focus on programming, particularly in React. For my engineering thesis, I developed an interactive chatbot using the ChatGPT model to support students in the educational process. I'm now seeking a job in IT to further develop my programming skills and gain practical industry experience. I'm diligent, disciplined, and effective both independently and in team environments. Available full-time during the week.                </h2>
                <a href="#work">
                    <button className='group p-3 my-5 border-2 border-violet-900 rounded-xl bg-violet-300 shadow-md shadow-violet-800'>
                        <p className='flex items-center bg-transparent text-violet-800 font-bold'>
                            Check out my work
                            <FaArrowRight className='ml-1 bg-transparent group-hover:rotate-90 duration-300' />
                        </p>
                    </button>
                </a>

            </div>
        </section>
    );
};

export default Home;