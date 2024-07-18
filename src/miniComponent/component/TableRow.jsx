import {
    imageFajr,
    imageDhhr,
    imageAsr,
    imageNight,
    imageSunset,
    imageSunrise,
    imageMaghrib,
    imageImsak,
    imageMidnight,
    imageFirstthird,
    imageLastthird,
    logo
} from '../../../public';


export default function TableRow(params) {

    let prayer = '';

    switch (params.title) {
        case 'fajr':
            prayer = imageFajr;
            break;
        case 'sunrise':
            prayer = imageSunrise;
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
        case "maghrib":
            prayer = imageMaghrib;
            break;
        case "sunset":
            prayer = imageSunset;
            break;
        case "imsak":
            prayer = imageImsak;
            break;
        case "midnight":
            prayer = imageMidnight;
            break;
        case "firstthird":
            prayer = imageFirstthird;
            break;
        case "lastthird":
            prayer = imageLastthird;
            break;
        default:
            prayer = logo;
    }

    return (
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <img className="w-10 h-10 rounded-full" src={prayer} alt="Rounded avatar" />
            </th>
            <td className="px-6 py-4">
                {params.img}
                {params.title}
            </td>
            <td className="px-6 py-4">
                {params.time}
            </td>
        </tr>
    )
}
