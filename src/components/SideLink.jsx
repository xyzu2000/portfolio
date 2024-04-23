import React from 'react';

const getBgColorClass = (color) => {
    switch (color) {
        case "linkedInColor":
            return "bg-linkedInColor";
        case "gitColor":
            return "bg-gitColor";
        case "mailColor":
            return "bg-mailColor";
        case "profileColor":
            return "bg-profileColor";
        default:
            return "";
    }
};
const SideLink = ({ link }) => {
    return (
        <a href={link.href} target='_blank'>
            <li className={`list-none text-white w-10 h-10 flex justify-center items-center ${getBgColorClass(link.color)} cursor-pointer ease-in-out duration-150 overflow-hidden hover:w-[90px]`} >
                <div className={`font-semibold hidden mx-1 ${getBgColorClass(link.color)}`}>{link.label}</div>
                {link.img}

            </li>
        </a>
    )
}


export default SideLink