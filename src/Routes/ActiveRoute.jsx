import { useState } from "react";
import { NavLink } from "react-router-dom";

const ActiveRoute = ({children, to}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "cursor-pointer p-4 rounded-full bg-[#0788FF] hover:flex items-center gap-4 group flex" : "cursor-pointer p-4 rounded-full bg-[#757575] group hover:flex items-center gap-4 hover:bg-[#0788FF] flex"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveRoute;