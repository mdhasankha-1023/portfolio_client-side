import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PrimaryBtn = ({text, typeValue, icon}) => {
    return (
        <button type={typeValue} className="pl-5 mr-2 mb-2 text-xl text-white focus:outline-none bg-[#1F1F1F] rounded-full border border-[#33F5B3] hover:bg-gradient-to-r from-[#37F5F4] to-[#33F5B3] hover:text-white uppercase font-bold flex justify-between items-center gap-4 cursor-pointer  transition-all z-40 duration-300">{text} <p className='px-6 py-5 bg-[#33F5B3] rounded-full'>
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        </p>
        </button>
    );
};

export default PrimaryBtn;