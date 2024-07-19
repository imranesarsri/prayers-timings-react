import { FaSun, FaMoon, FaLanguage } from "react-icons/fa6";
import { useContext, useState } from "react";
import { DarkModeContext } from "../App";

export default function Menu() {

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
        <nav className="bg-Blue-secondary text-light-default dark:bg-Blue-default w-full border-gray-200 dark:border-gray-600 rounded-lg">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
                </a>
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
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ">
                        <li>
                            <a href="#" className="block py-2 px-3  rounded md:bg-transparent md:text-Blue-default md:p-0 md:dark:text-Blue-secondary" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent ">About</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent ">Services</a>
                        </li>
                        <li>
                            <a href="#" className="block py-2 px-3 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 md:dark:hover:bg-transparent ">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

    )
}
