import NavContent from "../../Data/NavContent.json"
import { FaBars, FaWindowClose } from 'react-icons/fa';
import Image from "next/image";
import { useState, useEffect } from 'react';
// import Link from 'next/link'
import { Logo } from "../Logo";
import { Link } from 'react-scroll';

export const Nav = () => {
    const [mobileNav, setMobileNav] = useState(false)
    const menuClick = () => {
        setMobileNav(!mobileNav)
    }
    const [color, setColor] = useState(true)
    const changeColor = () => {
        if (window.scrollY >= 90) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", changeColor);

    }, [color]);
    return (
        <header>
            <nav className="fixed top-0 right-0 z-40 flex-col items-center justify-center hidden w-24 min-h-screen shadow-2xl lg:flex">
                <Logo />
                <ul className="flex flex-col items-center justify-center gap-10 ">
                    {NavContent.map((item) => (
                        <Link key={item.id} spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={0}
                            activeClass={navActive}
                            duration={500}
                            to={item.href}>
                            <li className="transition-all duration-500 delay-200 cursor-pointer text-black-color top-20 hover:scale-150" >
                                <Image className="w-auto h-10 mx-auto space-y-5 rounded-md" src={item.icon} width="1000" height="1000" alt={item.name} />
                            </li>
                        </Link>
                    ))}
                </ul>

            </nav>
            <section className="block lg:hidden">
                <div className="absolute z-40 block top-5 right-5">
                    <FaBars className={!mobileNav ? 'cursor-pointer transition-all ease-in-out duration-700 hover:scale-150 text-third-color' : 'hidden transition-all ease-in-out duration-700'}
                        size={30} onClick={menuClick} />
                </div>
                <nav className={mobileNav ? "fixed top-0 left-0 z-40 flex-col flex items-center justify-center w-64 h-screen shadow-2xl bg-primary-color duration-700 transition-all ease-in-out" : "fixed top-0 left-[-100%] z-40 flex-col flex items-center justify-center  w-64 h-screen shadow-2xl duration-700 transition-all ease-in-out"} >
                    <ul className="flex flex-col items-center justify-center gap-10 ">
                        {NavContent.map((item) => (
                            <Link key={item.id} to={item.href} spy={true}
                                smooth={true}
                                hashSpy={true}
                                activeClass={navActiveMobile}
                                offset={0} onClick={menuClick}
                                duration={500}>
                                <li onClick={menuClick} className="transition-all duration-500 delay-200 cursor-pointer text-black-color top-20 hover:scale-150"> <Image className="w-auto h-10 mx-auto space-y-5 rounded-md" src={item.icon} width="1000" height="1000" alt={item.name} /></li>
                            </Link>
                        ))}
                        <FaWindowClose className='transition-all duration-500 delay-200 cursor-pointer text-black-color top-20 hover:scale-150'
                            size={30} onClick={menuClick} />
                    </ul>
                </nav>
            </section >
        </header>
    )
}

const navActive = "scale-125 transition-all duration-500 delay-200";
const navActiveMobile = "scale-150 transition-all duration-500 delay-200";