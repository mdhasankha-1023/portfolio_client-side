import { faFacebook, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SocialMedia = () => {
    return (
        <div className='my-8 mx-auto flex gap-6 justify-start items-center'>
            <div className='bg-[#252525] text-white text-3xl p-3 rounded-full cursor-pointer hover:bg-[#0788FF] flex items-center justify-center'>
                <a target='_blank' href="https://www.facebook.com/profile.php?id=100063140996982">
                    <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
                </a>
            </div>
            <div className='bg-[#252525] text-white text-3xl p-3 rounded-full cursor-pointer hover:bg-[#0788FF] flex items-center justify-center'>
                <a target='_blank' href="https://github.com/mdhasankhan-123">
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
            </div>
            <div className='bg-[#252525] text-white text-3xl p-3 rounded-full cursor-pointer hover:bg-[#0788FF] flex items-center justify-center'>
                <a target='_blank' href="https://www.linkedin.com/in/md-hasan-kha-39355427b/">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
                </a>
            </div>
        </div>
    );
};

export default SocialMedia;