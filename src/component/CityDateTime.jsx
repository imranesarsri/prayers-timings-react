import { time } from '../../public'

export default function CityDateTime() {
    return (

        <div style={{ backgroundImage: `url(${time})`, backgroundSize: 'cover', }} className="text-light-default border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 p-5">
            <div className='mb-5'>
                <p className="text-2xl font-semibold">Frinday</p>
                <h5 className="mb-2 text-5xl font-bold tracking-tight">12:40</h5>
            </div>
            <div>
                <p className="text-xl">12 July 2024</p>
                <p className="text-xl">05 Moharam 1445</p>
            </div>
        </div>
    )
}
