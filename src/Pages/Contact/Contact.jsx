import ContactForm from "../../Components/ContactForm/ContactForm";
import PrimaryTitle from "../../Components/PrimaryTitle/PrimaryTitle";

const Contact = () => {
    return (
        <div className="bg-[#1F1F1F] h-[100%]">
            <PrimaryTitle first={'Get in'} last={'Touch'}></PrimaryTitle>
            <div className="flex gap-8 z-90">
                <div className="w-[40%] p-4">
                    <h1 className="text-white text-4xl text-start uppercase">Don't be Shy!</h1>
                    <p className="text-white text-lg text-justify my-6">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                </div>
                <div className="w-[60%] p-4">
                    <ContactForm></ContactForm>
                </div>
            </div>
        </div>
    );
};

export default Contact;