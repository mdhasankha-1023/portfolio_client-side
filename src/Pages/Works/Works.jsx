import { useLoaderData } from "react-router-dom";
import PrimaryTitle from "../../Components/PrimaryTitle/PrimaryTitle";
import TabItems from "../../Components/TabItems/TabItems";

const Works = () => {
    const projects = useLoaderData();

    return (
        <div className="bg-[#1F1F1F] h-[100vh]">
            <PrimaryTitle first={'My'} last={'Portfolio'}></PrimaryTitle>
            <div className="text-center">
                <TabItems projects={projects}></TabItems>
            </div>
        </div>
    );
};

export default Works;