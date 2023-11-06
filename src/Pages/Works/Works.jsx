import PrimaryTitle from "../../Components/PrimaryTitle/PrimaryTitle";
import Tabs from "../../Components/Tabs/Tabs";

const Works = () => {
    return (
        <div className="bg-[#1F1F1F] h-[100vh]">
            <PrimaryTitle first={'My'} last={'Portfolio'}></PrimaryTitle>
            <div>
                <Tabs></Tabs>
            </div>
        </div>
    );
};

export default Works;