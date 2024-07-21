import { getPrayerImage } from '../miniComponent/logic/PrayerImages';

export default function CardPrayer(params) {

    const prayer = getPrayerImage(params.title);

    return (
        <div className="max-w-sm mb-5 sm:mb-0 bg-light-default hover:bg-light-secondary rounded-lg shadow-custom dark:bg-dark-primary hover:dark:bg-dark-secondary">
            <a href="#">
                <img className="rounded-t-lg" src={prayer} alt="" />
            </a>
            <div className="p-5">

                <p className="capitalize text-xl font-semibold text-gray-700 dark:text-light-primary">
                    {params.title}
                </p>
                <h5 className="mb-2 text-9xl  lg:text-10xl font-bold tracking-tight text-dark-tertiary dark:text-white">
                    {params.time}
                </h5>
            </div>
        </div>

    )
}
