import React from 'react';
import pic from '../../../assets/pic.jpg'
import { TypeAnimation } from 'react-type-animation';
import PrimaryBtn from '../../../Components/PrimaryBtn/PrimaryBtn';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import avatar_pic from '../../../assets/personal_pic/avatar_pic.jpg'

const ProText = () => {
    return (
        <div className='h-[100vh] z-90 px-4'>
            <div className='w-[35%] h-[88%]  fixed left-[3%] top-[6%] rounded-xl hidden lg:flex drop-shadow-lg'>
                <img className='h-full w-full rounded-xl' src={pic} alt="" />
            </div>
            <div className='w-[100%] h-full text-white flex flex-col items-center lg:items-start lg:pl-[42%] justify-center'>
                <div className='flex justify-center lg:hidden'>
                    <img class="rounded-full w-[90%] h-38 flex justify-center border-4 border-[#757575]" src={avatar_pic} alt="Extra large avatar" />
                </div>
                <h1 className='text-3xl lg:text-4xl font-bold uppercase mt-6 lg:mt-0'>I'm Hasan kha </h1>
                <TypeAnimation
                    sequence={[
                        'Front-End Developer',
                        1000,
                        'MERN Stack Developer',
                        1000,
                    ]}
                    speed={20}
                    className='text-3xl lg:text-4xl font-bold text-[#00F3A1] leading-loose'
                    repeat={Infinity}
                />
                <p className='text-center lg:text-justify w-full lg:w-[80%] my-10 tracking-wide leading-10 text-lg lg:text-xl text-[#76A6A5]'>I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                <Link to={'/about'}>
                    <PrimaryBtn icon={faArrowRight} typeValue={'button'} text={'More About Me'}></PrimaryBtn>
                </Link>

            </div>
        </div>
    );
};

export default ProText;