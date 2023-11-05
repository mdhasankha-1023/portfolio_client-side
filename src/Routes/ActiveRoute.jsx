import { NavLink } from "react-router-dom";

const ActiveRoute = ({children, to}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive }) => isActive ? "cursor-pointer p-4 rounded-full bg-[#0788FF] flex items-center gap-4" : "cursor-pointer p-4 rounded-full bg-[#757575]"
            }
        >
            {children}
        </NavLink>
    );
};

export default ActiveRoute;