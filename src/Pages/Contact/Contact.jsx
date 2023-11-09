import ContactForm from "../../Components/ContactForm/ContactForm";
import PrimaryTitle from "../../Components/PrimaryTitle/PrimaryTitle";
import SocialMedia from "../../Components/SocialMedia/SocialMedia";
import WebTitle from "../../Components/WebTitle/WebTitle";
import location from '../../assets/Animation_Icons/location.gif'
import mail from '../../assets/Animation_Icons/mail.gif'
import phone from '../../assets/Animation_Icons/phone.gif'
import './Contact.css'

const Contact = () => {
    return (
        <div className="cnBg bg-[#040C18] h-[100%] my-10">
            <WebTitle title={'Contact'}></WebTitle>
            <PrimaryTitle first={'Get in'} last={'Touch'}></PrimaryTitle>
            <div className="flex flex-col lg:flex-row gap-8 z-90 my-16">
                <div className="w-full lg:w-[40%] px-8">
                    <h1 className="text-white text-4xl text-start uppercase">Don't be Shy!</h1>
                    <p className="text-[#76A6A5] text-lg text-justify my-6">Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
                    <div className="flex gap-8 flex-col text-white">
                        <div className="flex gap-4 items-center">
                            <figure className="w-[20%]">
                                <img className="w-full h-ful" src={location} alt="" />
                            </figure>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-white">Address Point:</label>
                                <p className='text-[#76A6A5]'>East Rajarbag Kalibari, Basabo, Dhaka-1214</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                        <figure className="w-[20%]">
                                <img className="w-full h-ful" src={mail} alt="" />
                            </figure>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-white">Email Address:</label>
                                <p className='text-[#76A6A5]'>mdhadankha.wd@gamil.com</p>
                            </div>
                        </div>
                        <div className="flex gap-4 items-center">
                        <figure className="w-[20%]">
                                <img className="w-full h-ful" src={phone} alt="" />
                            </figure>
                            <div>
                                <label class="block mb-2 text-sm font-medium text-white">Phone:</label>
                                <p className='text-[#76A6A5]'>+880 1646448338</p>
                            </div>
                        </div>
                    </div>
                    <SocialMedia></SocialMedia>
                </div>
                <div className="w-full lg:w-[60%] p-4">
                    <ContactForm></ContactForm>
                </div>
            </div>
        </div>
    );
};

export default Contact;