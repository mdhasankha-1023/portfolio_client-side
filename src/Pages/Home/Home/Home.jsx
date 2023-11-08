import WebTitle from "../../../Components/WebTitle/WebTitle";
import ProText from "../ProText/ProText";
import './Home.css'

const Home = () => {
    return (
        <div>
            <WebTitle title={'Home'}></WebTitle>
            <div className="pro hidden lg:flex"></div>
            <ProText></ProText>
        </div>
    );
};

export default Home;