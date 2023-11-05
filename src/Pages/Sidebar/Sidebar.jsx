import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope, faHouse, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import ActiveRoute from '../../Routes/ActiveRoute';

const Sidebar = () => {
    const [clicked, setClicked] = useState(false)

    return (
        <div className='fixed right-4 w-full flex flex-col justify-between items-end gap-16 text-2xl text-white'>
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
            <div className='flex gap-8 flex-col items-center'>
                <ActiveRoute to={'/'}>
                    <p>Home</p>
                    <FontAwesomeIcon  icon={faHouse}></FontAwesomeIcon>
                </ActiveRoute>
                <ActiveRoute to={'/about'}>
                    <FontAwesomeIcon  icon={faUser}></FontAwesomeIcon>
                </ActiveRoute>
                <ActiveRoute to={'/works'}>
                    <FontAwesomeIcon  icon={faBriefcase}></FontAwesomeIcon>
                </ActiveRoute>
                <ActiveRoute to={'/contact'}>
                    <FontAwesomeIcon  icon={faEnvelope}></FontAwesomeIcon>
                </ActiveRoute>
            </div>
        </div>
    );
};

export default Sidebar;