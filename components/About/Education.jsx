import aboutContent from "../../Data/aboutContent.json"
export const Education = () => {
    return (
        <div className="space-y-10">
            <div className="flex flex-col lg:gap-5 lg:flex-row">
                <div className="w-full space-y-5">
                    <h1 className="w-56 py-2 my-10 text-lg font-bold uppercase border-b-2 text-start border-black-color">Education</h1>
                    {
                        aboutContent.Eduction.map((item) => (
                            <div key={item.id} className="flex flex-col items-start justify-start gap-5 px-5 py-3 border bg-primary-color border-black-color">
                                <div >
                                    <p>{item.Date}</p>
                                </div>
                                <div className="flex flex-row gap-5">
                                    <p>{item.Institute}</p>
                                    <p>{item.Degree}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="w-full space-y-5">
                    <h1 className="w-56 py-2 my-10 text-lg font-bold uppercase border-b-2 text-start border-black-color">Experience</h1>
                    {
                        aboutContent.Exeperience.map((item) => (
                            <div key={item.id} className="flex flex-col items-start justify-start gap-5 px-5 py-3 border bg-secoundary-color border-black-color">
                                <div>
                                    <p>{item.Date}</p>
                                </div>
                                <div className="flex flex-row gap-5">
                                    <p>{item.Institute}</p>
                                    <p>{item.Job}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}