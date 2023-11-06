import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope, faHouse, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import ActiveRoute from '../../../../Routes/ActiveRoute';

const Sidebar = () => {
    const [clicked, setClicked] = useState(false)

    return (
        <div className='fixed right-4 flex flex-col justify-between items-end gap-16 text-2xl text-white'>
            {/* sidebar start */}
            <div className='cursor-pointer p-4 rounded-full bg-[#757575]'>
                {
                    clicked ?
                        <FontAwesomeIcon onClick={() => setClicked(false)} icon={faMoon}></FontAwesomeIcon>
                        :
                        <FontAwesomeIcon onClick={() => setClicked(true)} icon={faSun}></FontAwesomeIcon>
                }
            </div>

            {/* sidebar center */}
            <div className='flex gap-8 flex-col items-end'>
                <ActiveRoute to={'/'} >
                    <p className='hidden group-hover:flex hover:transition duration-1000'>Home</p>
                    <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                </ActiveRoute>
                <ActiveRoute to={'/about'}>
                    <p className='hidden group-hover:flex'>About</p>
                    <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </ActiveRoute>
                <ActiveRoute to={'/works'}>
                    <p className='hidden group-hover:flex'>Works</p>
                    <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
                </ActiveRoute>
                <ActiveRoute to={'/contact'}>
                    <p className='hidden group-hover:flex'>Contact</p>
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                </ActiveRoute>
            </div>
        </div>
    );
};

export default Sidebar;