import { useLoaderData } from "react-router-dom";
import PrimaryTitle from "../../Components/PrimaryTitle/PrimaryTitle";
import TabItems from "../../Components/TabItems/TabItems";
import WebTitle from "../../Components/WebTitle/WebTitle";

const Works = () => {
    const projects = useLoaderData();

    return (
        <div className="bg-[#040C18] h-[100%] pb-32 lg:pb-2">
            <WebTitle title={'Works'}></WebTitle>
            <PrimaryTitle first={'My'} last={'Portfolio'}></PrimaryTitle>
            <div className="text-center">
                <TabItems projects={projects}></TabItems>
            </div>
        </div>
    );
};

export default Works;