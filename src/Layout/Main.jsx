import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Home/Shared/Sidebar/Sidebar";

const Main = () => {
    return (
        <div>
            <Sidebar></Sidebar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;