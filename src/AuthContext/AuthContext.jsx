import React, { createContext, useState } from 'react';

export const NewContext = createContext(null);
const AuthContext = ({children}) => {
    const [toggle, setToggle] = useState(false);

    // implement dark & light mood system
    const lightDarkMood = (value) => {
        setToggle(value)
    }


    const info = {
        lightDarkMood,
        toggle
    }

    return (
        <NewContext.Provider value={info}>
            {children}
        </NewContext.Provider>
    );
};

export default AuthContext;