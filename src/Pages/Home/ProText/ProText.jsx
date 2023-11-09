import React from 'react';
import pic from '../../../assets/pic.jpg'
import { TypeAnimation } from 'react-type-animation';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ProText = () => {
    return (
        <div className='h-[100vh] z-90'>
            <div className='w-[35%] h-[88%]  fixed left-[3%] top-[6%] rounded-xl hidden lg:flex drop-shadow-lg'>
                <img className='h-full w-full rounded-xl' src={pic} alt="" />
            </div>
            <div className='w-[100%] h-full text-white flex flex-col items-center lg:items-start lg:pl-[42%] justify-center'>
                <h1 className='text-[3em] font-bold uppercase'>I am Hasan kha </h1>
                <TypeAnimation
                    sequence={[
                        'Front-end Developer',
                        1000,
                        'MERN stack Developer',
                        1000,
                    ]}
                    speed={20}
                    style={{ fontSize: '3em', color: '#00F3A1', fontWeight: 700 }}
                    repeat={Infinity}
                />
                <p className='text-center lg:text-justify w-full lg:w-[80%] my-10 tracking-wide leading-10 text-xl text-[#76A6A5]'>I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                <Link to={'/about'}>
                    <PrimaryBtn icon={faArrowRight} typeValue={'button'} text={'More About Me'}></PrimaryBtn>
                </Link>

            </div>
        </div>
    );
};

export default ProText;