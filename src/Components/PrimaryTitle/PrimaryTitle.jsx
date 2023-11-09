import React from 'react';

const PrimaryTitle = ({first, last}) => {
    return (
        <div className='text-6xl font-bold uppercase text-center py-24 bg-[#040C18]'>
            <h1 className='text-white'>{first} <span className='text-[#00F3A1]'>{last}</span></h1>
        </div>
    );
};

export default PrimaryTitle;