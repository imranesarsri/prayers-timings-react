import { useContext } from 'react'
import { time } from '../../public'
import NamePrayer from '../logic/NamePrayer'
import { ApiPrayersContext } from '../logic/ApiPrayersProvider'

export default function PrayerTimeRemaining() {
    const { currentPrayerAndNextPrayer, timeRemainingNextPrayer, getCurrentPeriod } = useContext(ApiPrayersContext)

    return (
        <div style={{ backgroundImage: `url(${time})`, backgroundSize: 'cover', }} className="text-light-default border mb-5 sm:mb-0 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
            <div className='mb-5'>
                <p className="text-2xl font-semibold">{NamePrayer(currentPrayerAndNextPrayer.currentPrayer)}</p>
                <p className='mt-1 text-md capitalize'>The time remaining for the next prayer</p>
                <h5 className="mb-2 text-5xl font-bold tracking-tight">{timeRemainingNextPrayer}</h5>
            </div>
            <div>
                <p className="text-xl">Next Pray: <span className='font-semibold'>{NamePrayer(currentPrayerAndNextPrayer.nextPrayer)}</span></p>
                <p className="text-xl"><span className='font-semibold'>{currentPrayerAndNextPrayer.timeNextPrayer}</span> {getCurrentPeriod}</p>
            </div>
        </div>
    )
}
