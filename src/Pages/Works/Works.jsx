import PrimaryTitle from "../../Components/PrimaryTitle/PrimaryTitle";
import TabItems from "../../Components/TabItems/TabItems";

const Works = () => {
    return (
        <div className="bg-[#1F1F1F] h-[100vh]">
            <PrimaryTitle first={'My'} last={'Portfolio'}></PrimaryTitle>
            <div className="text-center">
                <TabItems></TabItems>
            </div>
        </div>
    );
};

export default Works;