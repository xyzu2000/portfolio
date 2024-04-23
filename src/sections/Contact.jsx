import React from 'react';

const Contact = () => {
    return (
        <section id='contact' className='z-40 w-full min-h-screen flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-end text-center mx-auto text-white'>
                <h1 className='font-semibold text-4xl mb-1'>Contact</h1>
                <hr className='border-1 border-violet-800 mx-4' />
                <h2 className='text-slate-400 text-md py-5'>Submit the form below or shoot me an email</h2>
            </div>
            <form method='POST' action='https://getform.io/f/warkxqxb' className="w-full max-w-lg mx-auto">
                <div className="flex flex-wrap -mx-3 mb-6">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label htmlFor="name" className="block text-violet-300 text-sm font-bold mb-2">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="appearance-none border rounded w-full py-2 px-3 text-slate-300 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Name"
                        />
                    </div>
                    <div className="w-full md:w-1/2 px-3">
                        <label htmlFor="email" className="block text-violet-300 text-sm font-bold mb-2">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="appearance-none border rounded w-full py-2 px-3 text-slate-300 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Email"
                        />
                    </div>
                </div>
                <div className="mb-6">
                    <label htmlFor="message" className="block text-violet-300 text-sm font-bold mb-2">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        className="appearance-none border rounded w-full py-2 px-3 text-slate-300 leading-tight focus:outline-none focus:shadow-outline h-32"
                        placeholder="Message"
                    ></textarea>
                </div>
                <div className="flex justify-center">
                    <button
                        type="submit"
                        className='group px-6 py-3 my-5 border-2 border-violet-900 rounded-2xl bg-violet-300 shadow-md shadow-violet-800 font-bold'                    >
                        Send
                    </button>
                </div>
            </form>
        </section>
    );
};

export default Contact;
