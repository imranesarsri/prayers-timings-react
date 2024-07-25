import { useContext } from 'react'
import { time } from '../../public'
import { ApiPrayersContext } from '../logic/ApiPrayers'

export default function CityDateTime() {

    const { dateGregorian, dateHijri, currentPrayerAndNextPrayer } = useContext(ApiPrayersContext)

    return (
        <div style={{ backgroundImage: `url(${time})`, backgroundSize: 'cover', }} className="text-light-default border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
            <div className='mb-5'>
                <p className="text-2xl font-semibold">{dateGregorian.weekday.en}</p>
                <h5 className="mb-2 text-5xl font-bold tracking-tight">{currentPrayerAndNextPrayer.timeNow}</h5>
            </div>
            <div>
                <p className="text-xl">
                    <span>{dateGregorian.day} </span>
                    <span>{dateGregorian.month.en} </span>
                    <span>{dateGregorian.year} </span>
                </p>
                <p className="text-xl">
                    <span>{dateHijri.day} </span>
                    <span>{dateHijri.month.en} </span>
                    <span>{dateHijri.year} </span>
                </p>
            </div>
        </div>
    )
}
