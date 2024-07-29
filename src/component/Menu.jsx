import { FaSun, FaMoon, FaLanguage } from "react-icons/fa6";
import { useContext, useState } from "react";
import { DarkModeContext } from "../App";
import { getPrayerImage } from "../logic/PrayerImages";

export default function Menu() {

    const prayer = getPrayerImage('logo');

    const [darkModeIcon, setDarkModeIcon] = useState(<FaMoon />)
    const { darkMode, setDarkMode } = useContext(DarkModeContext)

    function handelDarkModeIcon() {
        if (darkMode == 'light') {
            setDarkMode('dark')
            setDarkModeIcon(<FaSun />)
        } else {
            setDarkMode('light')
            setDarkModeIcon(<FaMoon />)
        }
    }

    return (
        <nav className="bg-Blue-secondary text-light-default dark:bg-Blue-default w-full border-gray-200 sm:rounded-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={prayer} className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden sm:block">Salaah Timings</span>
                </a>
                <div>
                    <a href="#" className="block py-2 px-3 text-xl font-medium rounded md:bg-transparen md:p-0 md:text-light-default" aria-current="page">Prayers</a>
                </div>
                <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                    <div className="flex justify-between items-center">
                        <button className="px-5 text-xl" onClick={handelDarkModeIcon}>
                            {darkModeIcon}
                        </button>
                        <button className="text-xl flex justify-between items-center">
                            <span className="me-2">English</span>
                            <FaLanguage />
                        </button>
                    </div>

                </div>
            </div>
        </nav>

    )
}
