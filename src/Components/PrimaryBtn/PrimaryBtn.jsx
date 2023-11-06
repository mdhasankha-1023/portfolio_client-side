import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const PrimaryBtn = ({text, typeValue, icon}) => {
    return (
        <button type={typeValue} className="pl-5 mr-2 mb-2 text-xl text-white focus:outline-none bg-[#1F1F1F] rounded-full border border-[#0788FF] hover:bg-[#0788FF] hover:text-white uppercase font-bold flex justify-between items-center gap-4 cursor-pointer  transition-all z-40 duration-300">{text} <p className='px-6 py-5 bg-[#0788FF] rounded-full'>
            <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
        </p>
        </button>
    );
};

export default PrimaryBtn;