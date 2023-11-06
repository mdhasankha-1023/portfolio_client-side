import React from 'react';
import pic from '../../../assets/pic.jpg'
import { TypeAnimation } from 'react-type-animation';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const ProText = () => {
    return (
        <div className='w-full bg-[#1F1F1F] h-[100vh] z-40'>
            <div className='w-[50%] h-[80%]  fixed left-[5%] top-[10%] rounded-xl shadow-md shadow-transparent'>
                <img className='h-full rounded-xl' src={pic} alt="" />
            </div>
            <div className='w-[100%] h-full text-white flex flex-col items-start pl-[42%] justify-center'>
                <h1 className='text-[3em] font-bold uppercase'>I am Hasan kha </h1>
                <TypeAnimation
                    sequence={[
                        // Same substring at the start will only be typed once, initially
                        'Front-end Developer...',
                        1000,
                        'MERN stack Developer...',
                        1000,
                    ]}
                    speed={50}
                    style={{ fontSize: '3em', color: '#0788FF', fontWeight: 700 }}
                    repeat={Infinity}
                />
                <p className='text-justify w-[80%] my-10 tracking-wide leading-10 text-xl'>I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                <PrimaryBtn icon={faArrowRight} typeValue={'button'} text={'More About Me'}></PrimaryBtn>

            </div>
        </div>
    );
};

export default ProText;