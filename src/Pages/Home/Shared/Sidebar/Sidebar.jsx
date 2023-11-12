import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBriefcase, faEnvelope, faHouse, faMoon, faSun, faUser } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import ActiveRoute from '../../../../Routes/ActiveRoute';
import { useContext } from 'react';
import { NewContext } from '../../../../AuthContext/AuthContext';
import { useEffect } from 'react';

const Sidebar = () => {
    const {lightDarkMood, toggle} = useContext(NewContext);
    const [clicked, setClicked] = useState(false);

    // handle them mood toggle
    const handleThemMoodToggle = (value) => {
        lightDarkMood(value);
        setClicked(value);
    }


    useEffect(()=> {
        document.body.style.backgroundColor = lightDarkMood ? 'lightBackground' : 'darkBackground';
    }, [clicked])

    return (
        <div>
            <div className='fixed flex top-8 right-4 cursor-pointer p-4 rounded-full bg-[#757575] text-2xl'>
                {
                    clicked ?
                        <FontAwesomeIcon onClick={() => handleThemMoodToggle(false)} icon={faMoon}></FontAwesomeIcon>
                        :
                        <FontAwesomeIcon onClick={() => handleThemMoodToggle(true)} icon={faSun}></FontAwesomeIcon>
                }
            </div>
            <div className='fixed bottom-0 py-2 lg:py-0 lg:right-4 lg:top-40 text-2xl text-white z-50 w-full lg:w-0 bg-gray-700 lg:inline-block'>

                {/* sidebar center */}
                <div className='flex gap-8 lg:flex-col justify-around lg:items-end'>
                    <ActiveRoute to={'/'} >
                        <p className='hidden group-hover:lg:flex hover:transition duration-1000'>Home</p>
                        <FontAwesomeIcon icon={faHouse}></FontAwesomeIcon>
                    </ActiveRoute>
                    <ActiveRoute to={'/about'}>
                        <p className='hidden group-hover:lg:flex'>About</p>
                        <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                    </ActiveRoute>
                    <ActiveRoute to={'/works'}>
                        <p className='hidden group-hover:lg:flex'>Works</p>
                        <FontAwesomeIcon icon={faBriefcase}></FontAwesomeIcon>
                    </ActiveRoute>
                    <ActiveRoute to={'/contact'}>
                        <p className='hidden group-hover:lg:flex'>Contact</p>
                        <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
                    </ActiveRoute>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;