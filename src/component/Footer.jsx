import { getPrayerImage } from "../logic/PrayerImages";

export default function Footer() {

    const prayer = getPrayerImage('logo');

    return (


        <footer className="bg-Blue-secondary text-light-default rounded-lg shadow dark:bg-Blue-default" >
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <div>
                    <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={prayer} className="h-8" alt="SalaahTimings Logo" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white hidden sm:block">Salaah Timings</span>
                    </a>
                </div>
                <div>

                    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                        <span className="text-sm sm:text-center">© 2024 <a href="/" className="hover:underline">SalaahTimings</a>. All Rights Reserved.
                        </span>
                    </div>
                </div>
            </div>
        </footer>

    )
}
