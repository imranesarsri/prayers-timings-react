import { date } from '../../public'

export default function PrayerTimeRemaining() {
    return (
        <div style={{ backgroundImage: `url(${date})`, backgroundSize: 'cover', }} className="text-light-default border mb-5 sm:mb-0 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
            <div className='mb-5'>
                <p className="text-2xl font-semibold">Doher</p>
                <h5 className="mb-2 text-5xl font-bold tracking-tight">02:21:27</h5>
            </div>
            <div>
                <p className="text-xl">Next Pray: <span className='font-semibold'>Asr</span></p>
                <p className="text-xl"><span className='font-semibold'>17:09</span> MP</p>
            </div>
        </div>
    )
}
