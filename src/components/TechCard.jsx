import React from 'react'

const TechCard = ({ item }) => {
    return (
        <div className='rounded-xl hover:scale-110 ease-in-out duration-100 flex flex-col justify-center items-center shadow-xl shadow-violet-700 max-w-sm max-h-sm w-36 h-40 text-center'>
            <img src={item.img} className='h-20' alt="" />
            <p className='text-stone-500 font-bold'>{item.label}</p>
        </div>
    )
}

export default TechCard