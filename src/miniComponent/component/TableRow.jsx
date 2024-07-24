import { getPrayerImage } from "../../logic/PrayerImages";


export default function TableRow(params) {

    const prayer = getPrayerImage(params.title);

    return (
        <tr className="odd:bg-white odd:dark:bg-dark-primary even:bg-light-tertiary even:dark:bg-dark-secondary border-b dark:border-gray-700">
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
