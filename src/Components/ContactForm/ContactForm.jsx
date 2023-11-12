import React from 'react';
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';
import PrimaryBtn from '../PrimaryBtn/PrimaryBtn';

const ContactForm = () => {

    // handle Contact Form
    const handleContactForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        const conInfo = { name, email, subject, message };
        console.log(conInfo);

        fetch('https://portfolio-server-side-sand.vercel.app/email',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(conInfo)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.log(err.message))
    }



    return (

        <form onSubmit={handleContactForm}>
            <div className='flex flex-col lg:flex-row gap-10 mt-6 pb-16 lg:mb-0'>
                <div className="w-full lg:w-[50%]">
                    {/* Name */}
                    <input type="text" name='name' className="nameInput shadow-sm bg-[#040C18] border border-[#33F5B3] text-white text-sm rounded-full w-full rounded-full py-4 px-6 text-xl px-6 focus:ring-[#33F5B3] focus:border-[#33F5B3] appearance-none" placeholder="YOUR NAME" required />
                </div>
                <div className="w-full lg:w-[50%]">
                    {/* Email */}
                    <input type='email' name='email' placeholder='YOUR EMAIL' className="shadow-sm border border-[#33F5B3] bg-[#040C18] text-white rounded-full w-full py-4 px-6 text-xl focus:ring-[#33F5B3] focus:border-[#33F5B3]" required />
                </div>
            </div>
            <div className="mb-10">
                {/* subject */}
                <input type="text" name='subject' placeholder='YOUR SUBJECT' className="shadow-sm border border-[#33F5B3] bg-[#040C18] text-white w-full rounded-full py-4 px-6 text-xl focus:ring-[#33F5B3] focus:border-[#33F5B3]" required />
            </div>
            <div className='mb-10'>
                {/* Message */}
                <textarea id="message" name='message' rows="6" className="block w-full text-xl text-white border border-[#33F5B3] bg-[#040C18] rounded-2xl py-4 px-6 focus:ring-[#33F5B3] focus:border-[#33F5B3]" placeholder="YOUR MESSAGE..." required></textarea>
            </div>
            <PrimaryBtn icon={faPaperPlane} text={'Message Me'} typeValue={'submit'}></PrimaryBtn>
        </form>

    );
};

export default ContactForm;