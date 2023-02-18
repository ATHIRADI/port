import { SocialMedia } from "../SocialMedia";
import contactContent from "../../Data/contactContent.json"
export const Address = () => {
    return (
        <div className="space-y-10">
            <h1 className="w-40 py-2 my-10 text-xl font-bold uppercase border-b-8 text-start border-black-color">Contact</h1>
            <hr className="h-px my-5 border-0 bg-primary-color" />
            <h1 className="text-4xl font-bold uppercase">{contactContent.title}</h1>
            <p className="leading-8 text-md lg:max-w-full text-start">{contactContent.text}</p>
            <div className="space-y-2">
                <h1 className="w-24 py-2 my-10 text-lg font-bold uppercase border-b-2 text-start border-black-color">Email</h1>
                <p className="leading-8 text-md lg:max-w-full text-start">{contactContent.emailAddress}</p>
            </div>
            <div className="space-y-2">
                <h1 className="w-24 py-2 my-10 text-lg font-bold uppercase border-b-2 text-start border-black-color">Social</h1>
                <SocialMedia />
            </div>

            <div className="space-y-2">
                <h1 className="w-24 py-2 my-10 text-lg font-bold uppercase border-b-2 text-start border-black-color">Address</h1>
                <p className="leading-8 text-md lg:max-w-full text-start">{contactContent.phone}</p>
                <p className="leading-8 text-md lg:max-w-full text-start">{contactContent.address}</p>
            </div>
        </div>
    )
}