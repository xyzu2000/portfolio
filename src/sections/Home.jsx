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
                <h2>
                    I'm a ...
                </h2>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi laborum fugit dicta tempora explicabo dolores illum dolor possimus sunt ea amet impedit a totam adipisci voluptate iusto ipsum, soluta accusamus.
                </p>
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