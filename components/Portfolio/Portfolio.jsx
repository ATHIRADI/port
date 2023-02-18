import { Shape } from "../Shape";
import { Single } from "./Single";

export const Portfolio = () => {
    return (
        <section id="portfolio" className="relative bg-primary-color">
            <div className="container relative z-30 flex flex-col items-center justify-center max-w-6xl min-h-screen gap-5 mx-auto ">
                <div className="w-full h-full px-5 my-5 space-y-10 lg:px-28">
                    <h1 className="w-40 py-2 my-10 text-xl font-bold uppercase border-b-8 text-start border-black-color">PORTFOLIO</h1>
                    <hr className="h-px border-0 bg-secoundary-color " />
                    <Single />
                </div>
            </div>
            <Shape color="#D5BFBF" />
        </section >
    )
}