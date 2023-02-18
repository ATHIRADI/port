import Image from "next/image"
import { TypeEffect } from "../TypeEffect";
import aboutContent from "../../Data/aboutContent.json"
import { Shape } from "../Shape";
import { Info } from "./Info";
import { Skills } from "./Skills";
import { Education } from "./Education";
import { Intro } from "./Intro";
export const About = () => {
    return (
        <section id="about" className="relative bg-secoundary-color">
            <div className="container relative z-30 flex flex-col items-center justify-center max-w-6xl min-h-screen gap-5 mx-auto ">
                <div className="w-full h-full px-5 my-5 space-y-10 lg:px-28">
                    <h1 className="w-40 py-2 my-10 text-xl font-bold uppercase border-b-8 text-start border-black-color">ABOUT</h1>
                    <hr className="h-px border-0 bg-primary-color " />
                    <Image className="h-[350px] object-cover  w-full  lg:h-[650px] ring-secoundary-color rounded-md " src={aboutContent.aboutImage} alt="aboutImage" width="1000" height="1000" />
                    <h1 className="text-4xl font-bold uppercase">{aboutContent.name}</h1>
                    <TypeEffect />
                    <Intro />
                    <hr className="h-px border-0 bg-primary-color " />
                    <Info />
                    <hr className="h-px border-0 bg-primary-color " />
                    <Skills />
                    <hr className="h-px border-0 bg-primary-color " />
                    <Education />
                </div>
            </div>
            <Shape color="#FEFBE9" />
        </section>
    )
}
