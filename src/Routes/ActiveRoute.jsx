import { useState } from "react";
import { NavLink } from "react-router-dom";

const ActiveRoute = ({children, to}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "cursor-pointer p-4 rounded-full bg-gradient-to-r from-[#37F5F4] to-[#33F5B3] hover:flex items-center gap-4 group flex" : "cursor-pointer p-4 rounded-full bg-[#757575] group hover:flex items-center gap-4 hover:bg-gradient-to-r from-[#37F5F4] to-[#33F5B3] flex"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveRoute;