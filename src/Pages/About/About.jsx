import { faDownload } from "@fortawesome/free-solid-svg-icons";
import PrimaryBtn from "../../Components/PrimaryBtn/PrimaryBtn";
import PrimaryTitle from "../../Components/PrimaryTitle/PrimaryTitle";
import Skills from "../../Components/Skills/Skills";
import resume from '../../assets/resume/Resume_of_Md_Hasan_kha.pdf'
import WebTitle from "../../Components/WebTitle/WebTitle";

const About = () => {

    // handle download resume btn



    return (
        <div className="bg-[#040C18]">
            <WebTitle title={'About'}></WebTitle>
            <PrimaryTitle first={'About'} last={'Me'}></PrimaryTitle>
            <div className="flex flex-col lg:flex-row text-white">
                <div className="lg:w-[40%] w-full px-4">
                    <h1 className="text-stat text-4xl font-bold mb-10 text-[#00F3A1]">Personal Infos</h1>
                    <div className="grid grid-cols-2 gap-12 overflow-hidden">
                        {/* name */}
                        <div className="flex flex-col gap-1">
                            <span className="text-xl text-gray-400">Full Name:</span>
                            <p className='font-bold text-xl text-gray-300'>MD. Hasan Kha</p>
                        </div>

                        {/* nationality */}
                        <div className="flex flex-col gap-1">
                            <span className="text-xl text-gray-400">Nationality:</span>
                            <p className='font-bold text-xl text-gray-300'>Bangladeshi</p>
                        </div>

                        {/* address */}
                        <div className="flex flex-col gap-1">
                            <span className="text-xl text-gray-400">Address:</span>
                            <p className='font-bold text-xl text-gray-300'>Dhaka, Bangladesh</p>
                        </div>

                        {/* language */}
                        <div className="flex flex-col gap-1">
                            <span className="text-xl text-gray-400">language:</span>
                            <p className='font-bold text-xl text-gray-300'>Bangla, English</p>
                        </div>

                    </div>
                    <div className="flex justify-start items-center mt-16">
                        <a href={resume}>
                            <PrimaryBtn text={'Download Resume'} icon={faDownload}>
                            </PrimaryBtn>
                        </a>

                    </div>
                </div>
                <div className="w-full lg:w-[60%]">
                    <p className="text-justify px-4 mt-8 lg:mt-0 lg:pr-24 leading-8 text-xl tracking-wider text-[#76A6A5]">Hey there! I'm Hasan, a MERN Stack Developer on a mission to craft seamless and visually stunning web applications. My passion lies in the intricacies of coding, where every project is a canvas for innovation. Clean code, thoughtful design, and user-centric development are the pillars of my approach. I thrive on the continuous journey of learning and growth that web development offers. Let's collaborate and turn your ideas into something extraordinary! Explore my portfolio to get a glimpse of my digital journey.</p>
                </div>
            </div>
            <div className="py-20 text-white">
                <h1 className="text-center text-4xl uppercase text-[#00F3A1]">My Skills</h1>
                <div className="w-full lg:w-[50%] px-4 mx-auto my-10">
                    <Skills></Skills>
                </div>
            </div>
        </div>
    );
};

export default About;