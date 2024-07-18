import SecondaryHeader from "../miniComponent/headers/SecondaryHeader";

export default function PrayerDefinitions() {
    return (
        <div className="grid grid-cols-12 gap-4">
            <div className="col-span-2">
                <img className="w-10 h-10 rounded" src="/docs/images/people/profile-picture-5.jpg" alt="Default avatar" />
            </div>
            <div className="col-span-10">
                <SecondaryHeader secondaryHeader="fajr" />
                <p>
                    The Fajr prayer is the first of the five daily prayers (salat) performed daily by practicing Muslims. Fajr means dawn in the Arabic language.
                </p>
            </div>
        </div>
    )
}
