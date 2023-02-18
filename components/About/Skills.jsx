import aboutContent from "../../Data/aboutContent.json"
export const Skills = () => {
    return (
        <div className="space-y-10">
            <h1 className="w-56 py-2 my-10 text-lg font-bold uppercase border-b-2 text-start border-black-color">Programming Skills</h1>
            {
                aboutContent.Skills.map((item) => (
                    <div key={item.id} className='w-full '>
                        <div className="mb-2 text-black-color">{item.skill}</div>
                        <div className="flex w-full h-5 bg-white-color ">
                            <div className="flex items-center justify-center h-5 text-xs text-white-color bg-black-color" style={{ width: `${item.percent}%` }}> {item.percent}%</div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}