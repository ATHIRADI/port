import aboutContent from "../../Data/aboutContent.json"
export const Info = () => {
    return (
        <div className="space-y-10">
            <h1 className="w-56 py-2 my-10 text-lg font-bold uppercase border-b-2 text-start border-black-color">Personal info</h1>
            <div className="flex flex-col space-y-5 lg:space-y-0 lg:gap-5 lg:flex-row">
                <div className="w-full space-y-5">
                    {
                        aboutContent.bioLeft.map((item) => (
                            <h1 key={item.id} className="font-semibold">{item.name} : <span className="font-normal">{item.content}</span></h1>
                        ))
                    }
                </div>
                <div className="w-full space-y-5">
                    {
                        aboutContent.bioRight.map((item) => (
                            <h1 key={item.id} className="font-semibold">{item.name} : <span className="font-normal">{item.content}</span></h1>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}