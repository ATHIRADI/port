import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const ContactForm = () => {
    const [button, setButton] = useState(false)
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        setButton(true)

        emailjs
            .sendForm(
                "service_fq04kk2",
                "template_wa37e9d",
                form.current,
                "qWKfn3HmUVFHbEl15"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setButton(false)
                    toast.success("Email Sent Successfully")
                },
                (error) => {
                    console.log(error.text);
                    setButton(false)
                    toast.error("Error")
                }
            );
    };
    return (
        <div className="my-5 space-y-10">
            <form
                ref={form}
                onSubmit={sendEmail}
                className="flex flex-col w-full space-y-5"
            >
                <div className="flex flex-col w-full lg:flex-row">
                    <input
                        className="flex-grow p-2 m-1 border-b-2 shadow-xl outline-none text-md border-black-color bg-white-color placeholder:text-black-color"
                        type="text"
                        name="user_name"
                        placeholder="Enter Your Full Name"
                    />
                    <input
                        className="flex-grow p-2 m-1 border-b-2 shadow-xl outline-none text-md border-black-color bg-white-color placeholder:text-black-color"
                        type="email"
                        name="user_email"
                        placeholder="Enter Your Email Address"
                    />
                </div>
                <textarea
                    className="p-2 m-1 border-b-2 shadow-xl outline-none text-md border-black-color bg-white-color placeholder:text-black-color"
                    placeholder="Your Message"
                    name="message"
                    rows="3"
                ></textarea>
                <button className="px-5 py-2 transition-all duration-500 shadow-xl w-44 bg-black-color text-white-color hover:scale-105">{!button ? "Sent Message" : "Sending..."}</button>
                <ToastContainer position="bottom-left" />
            </form>
        </div>
    )
}
