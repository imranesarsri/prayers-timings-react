import SecondaryHeader from "../miniComponent/headers/SecondaryHeader";
import PrayerImages from "../miniComponent/logic/PrayerImages";

export default function PrayerDefinitions(params) {
    const prayer = PrayerImages[params.name] || PrayerImages.default;

    return (
        <div className="grid grid-cols-12 gap-4 bg-light-secondary dark:bg-dark-primary text-dark-default dark:text-light-default mb-5 px-5 py-2 rounded-lg">
            <div className="col-span-3 lg:col-span-2 my-auto">
                <img className="w-10 h-10 rounded" src={prayer} alt="Default avatar" />
            </div>
            <div className="col-span-9 lg:col-span-10">
                <SecondaryHeader secondaryHeader={params.name} />
                <p className="text-justify">
                    {params.description}
                </p>
            </div>
        </div>
    )
}
