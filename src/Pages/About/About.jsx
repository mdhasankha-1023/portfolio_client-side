import PrimaryTitle from "../../Components/PrimaryTitle/PrimaryTitle";

const About = () => {
    return (
        <div className="bg-[#1F1F1F] h-[100vh]">
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
                </div>
                <div className="w-[65%]">
                    <p className="text-justify p-4">I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me. I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.</p>
                </div>
            </div>
            <div className="my-10 text-white">
                <h1 className="text-center text-3xl uppercase">My Skills</h1>
            </div>
        </div>
    );
};

export default About;