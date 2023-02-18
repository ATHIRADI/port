import Image from "next/image"
import { TypeEffect } from "../TypeEffect";
import { SocialMedia } from "../SocialMedia";
import { Shape } from "../Shape";
import heroContent from "../../Data/heroContent.json"

export const Hero = () => {
    return (
        <section id="hero" className="relative bg-primary-color">
            <div className="container relative z-30 flex flex-col items-center justify-center max-w-6xl min-h-screen gap-5 px-5 mx-auto lg:flex-row lg:px-28">
                <div className="w-full h-full my-5 mt-16 lg:mt-0">
                    <Image className="h-[300px] object-cover m-auto w-[300px] lg:w-[400px] lg:h-[400px] ring-secoundary-color rounded-md ring-8 shadow-2xl" alt="heroImage" src={heroContent.heroImage} width="1000" height="1000" />
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full my-5 space-y-5 text-black-color lg:items-start">
                    <h1 className="text-4xl font-bold uppercase">{heroContent.name}</h1>
                    <TypeEffect />
                    <p className="leading-8 text-center text-md lg:text-start">{heroContent.text}</p>
                    <SocialMedia />
                </div>
            </div>
            <Shape color="#D5BFBF" />
        </section>
    )
}


