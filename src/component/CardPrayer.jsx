import { imageFajr, imageDhhr, imageAsr, imageNight, imageSunset, logo } from '../../public';


export default function CardPrayer(params) {

    let prayer = '';

    switch (params.name) {
        case 'fajr':
            prayer = imageFajr;
            break;
        case "dhhr":
            prayer = imageDhhr;
            break;
        case "asr":
            prayer = imageAsr;
            break;
        case "night":
            prayer = imageNight;
            break;
        case "sunset":
            prayer = imageSunset;
            break;
        default:
            prayer = logo;
    }

    return (
        <div className="max-w-sm mb-5 sm:mb-0 bg-light-default hover:bg-light-secondary rounded-lg shadow-custom dark:bg-gray-800">
            <a href="#">
                <img className="rounded-t-lg" src={prayer} alt="" />
            </a>
            <div className="p-5">

                <p className="capitalize text-xl font-semibold text-gray-700">
                    {params.name}
                </p>
                <h5 className="mb-2 text-9xl  lg:text-10xl font-bold tracking-tight text-dark-tertiary dark:text-white">
                    {params.time}
                </h5>
            </div>
        </div>

    )
}
