import React from 'react';

const PrimaryTitle = ({first, last}) => {
    return (
        <div className='text-6xl font-bold uppercase text-center py-24 bg-[#1F1F1F]'>
            <h1 className='text-white'>{first} <span className='text-[#0788FF]'>{last}</span></h1>
        </div>
    );
};

export default PrimaryTitle;