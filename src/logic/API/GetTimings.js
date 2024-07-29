import axios from 'axios';

export default async function GetTimings(city, country, setTiming, setDateGregorian, setDateHijri) {
    try {
        const response = await axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country.Iso2}`);
        setTiming(response.data.data.timings);
        setDateGregorian(response.data.data.date.gregorian);
        setDateHijri(response.data.data.date.hijri);
    } catch (error) {
        console.error("Error fetching timings:", error);
    }
}
