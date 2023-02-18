import portfolioContent from "../../Data/portfolioContent.json"
import Image from "next/image";
import { useState, useEffect } from "react";
export const Single = () => {
    const [filter, setFilter] = useState('all');
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        setProjects(portfolioContent.projects);
    }, []);
    useEffect(() => {
        setProjects([]);
        const filtered = portfolioContent.projects.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setProjects(filtered);
    }, [filter]);
    return (
        <section className="space-y-10">
            <div className="flex flex-row gap-5 ">
                <h1 className="py-2 text-sm font-semibold uppercase border-b-2 cursor-pointer text-start border-black-color" active={filter === 'front' ? "true" : "false"} onClick={() => setFilter('front')}>Frontend</h1>
                <h1 className="py-2 text-sm font-semibold uppercase border-b-2 cursor-pointer text-start border-black-color" active={filter === 'back' ? "true" : "false"} onClick={() => setFilter('back')}>Backend</h1>
                <h1 className="py-2 text-sm font-semibold uppercase border-b-2 cursor-pointer text-start border-black-color" active={filter === 'full' ? "true" : "false"} onClick={() => setFilter('full')}>Full-stack</h1>
            </div>
            <div>
                <div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 justify-items-center">
                    {projects.map(item => item.filtered === true ? (
                        <div key={item.id} className="relative w-full cursor-pointer h-96 group ">
                            <Image className="w-full rounded-md h-96" src={item.ProjectImage} width="1000" height="1000" />
                            <div className="absolute bottom-0 z-10 flex flex-col items-center justify-center w-full transition-all duration-500 opacity-0 rounded-b-md h-1/5 bg-black-color group-hover:opacity-80">
                                <h1 className="text-white-color">{item.title}</h1>
                            </div>
                        </div>
                    ) : '')}
                </div>
            </div>
        </section>
    )
}