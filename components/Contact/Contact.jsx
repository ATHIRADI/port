import { Shape } from "../Shape";
import { Address } from "./Address";

import { ContactForm } from "./ContactForm";
export const Contact = () => {

    return (
        <section id="contact" className="relative bg-secoundary-color">
            <div className="container relative z-30 flex flex-col items-center justify-center max-w-6xl min-h-screen gap-5 mx-auto ">
                <div className="w-full h-full px-5 my-5 lg:px-28">
                    <Address />
                    <hr className="h-px my-5 border-0 bg-primary-color" />
                    <ContactForm />
                </div>
            </div>
            <Shape color="#FEFBE9" />
        </section>
    )
}