import Image from "next/image"
import logo from "../Data/logo.json"
export const Logo = () => {
    return (
        <div className="absolute flex items-center justify-center p-1 border rounded-full shadow-xl bottom-10">
            <Image className="w-full h-14" src={logo.logoImage} width="1000" height="1000" alt={logo.logName} />
        </div>
    )
}