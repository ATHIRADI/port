import { SocialIcon } from 'react-social-icons';
import socialmedia from "../Data/socialmedia.json"

export const SocialMedia = () => {
    return (
        <div className="flex flex-row space-x-5">
            {socialmedia.map((item) => (
                <div key={item.id} className="flex items-center justify-center w-10 h-10 rounded-full shadow-xl bg-primary-color">
                    <SocialIcon className='transition-all duration-500 ease-in-out rounded-full shadow-md hover:scale-125 bg-third-color' style={{ height: 30, width: 30 }} url={item.link} />
                </div>
            ))}
        </div>
    )
}