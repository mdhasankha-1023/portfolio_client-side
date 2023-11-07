import { faDownload } from "@fortawesome/free-solid-svg-icons";
import PrimaryBtn from "../../Components/PrimaryBtn/PrimaryBtn";
import PrimaryTitle from "../../Components/PrimaryTitle/PrimaryTitle";
import Skills from "../../Components/Skills/Skills";
import resume from '../../assets/resume/Resume_of_Md_Hasan_kha.pdf'

const About = () => {

    // handle download resume btn



    return (
        <div className="bg-[#1F1F1F] h-[200%]">
            <PrimaryTitle first={'About'} last={'Me'}></PrimaryTitle>
            <div className="flex text-white">
                <div className="w-[35%] px-4">
                    <h1 className="text-stat text-4xl font-bold mb-10">Personal Infos</h1>
                    <div className="grid grid-cols-2 gap-8">
                        <div className="flex flex-col gap-1">
                            <h5>Full Name:</h5>
                            <p>MD. Hasan Kha</p>
                        </div>
                        <div>
                            <h5>Nationality:</h5>
                            <p>Bangladeshi</p>
                        </div>
                        <div>
                            <h5>Address:</h5>
                            <p>Bangladesh</p>
                        </div>
                        <div>
                            <h5>Phone:</h5>
                            <p>+880 1646448338</p>
                        </div>
                        <div>
                            <h5>Email:</h5>
                            <p>mdhasankha.wd@gmail.com</p>
                        </div>
                        <div>
                            <h5>Language:</h5>
                            <p>English, Bangla</p>
                        </div>
                    </div>
                    <div className="flex justify-start items-center mt-16">
                        <a  href={resume}>
                            <PrimaryBtn text={'Download Resume'} icon={faDownload}>
                            </PrimaryBtn>
                        </a>

                    </div>
                </div>
                <div className="w-[65%]">
                    <p className="text-justify p-4">I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me. I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                </div>
            </div>
            <div className="py-20 text-white">
                <h1 className="text-center text-3xl uppercase">My Skills</h1>
                <div className="w-[50%] mx-auto my-10">
                    <Skills></Skills>
                </div>
            </div>
        </div>
    );
};

export default About;