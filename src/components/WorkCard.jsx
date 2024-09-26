
const WorkCard = ({ item }) => {
    return (
        <div style={{ backgroundImage: `url(${item.img})` }} className="shadow-md max-w-[500px] shadow-violet-600 group rounded-md flex justify-center text-center items-center content-div m-auto">
            <div className="opacity-0 group-hover:opacity-100 bg-none">
                <p className="text-2xl font bold text-white tracking-wider ">
                    {item.name}
                </p>
                <div className="pt-8 text-center ">

                    <a href={item.github} target="_blank">
                        <button
                            className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                            Code
                        </button>
                    </a>
                    <a href={item.live} target="_blank">
                        <button
                            className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                            Live
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default WorkCard