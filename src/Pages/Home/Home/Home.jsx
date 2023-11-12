import WebTitle from "../../../Components/WebTitle/WebTitle";
import ProText from "../ProText/ProText";
import './Home.css'
const Home = () => {


    return (
        <div className="pt-16 pb-32 lg:pb-0">
            <WebTitle title={'Home'}></WebTitle>
            <div className="pro bg-gradient-to-r from-[#33F5B3] to-[#37F5F4] hidden lg:flex"></div>
            <ProText></ProText>
        </div>
    );
};

export default Home;