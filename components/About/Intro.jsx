import aboutContent from "../../Data/aboutContent.json"
export const Intro = () => {
    return (
        <div className="space-y-10">
            <p className="leading-8 text-md lg:max-w-full text-start">{aboutContent.text}</p>
        </div>
    )
}