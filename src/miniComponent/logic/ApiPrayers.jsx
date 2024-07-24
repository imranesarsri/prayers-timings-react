import { useEffect, useState, createContext } from 'react';
import moment from 'moment';
import CurrentPrayerAndNextPrayer from './CurrentPrayerAndNextPrayer';
import GetTimings from '../../logic/API/GetTimings';
import GetCountries from '../../logic/API/GetCountries';
import GetCities from '../../logic/API/GetCities';
import GetCapital from '../../logic/API/GetCapital';

export const ApiPrayersContext = createContext(null);

export default function ApiPrayers(params) {

    const [currentPrayerAndNextPrayer, setCurrentPrayerAndNextPrayer] = useState({
        currentPrayer: 0,
        nextPrayer: 1
    })

    const [timeNow, setTimeNow] = useState('')
    const [timings, setTiming] = useState({
        Imsak: "00:00",
        Fajr: "00:00",
        Sunrise: "00:00",
        Dhuhr: "00:00",
        Asr: "00:00",
        Sunset: "00:00",
        Maghrib: "00:00",
        Isha: "00:00",
        Midnight: "00:00",
        Firstthird: "00:00",
        Lastthird: "00:00"
    });

    const [dateGregorian, setDateGregorian] = useState({
        date: "DD-MM-YYYY",
        day: "DD",
        month: { en: "MM", number: "MM" },
        weekday: { en: "DD" },
        year: "YYYY"
    })
    const [dateHijri, setDateHijri] = useState({
        date: "DD-MM-YYYY",
        day: "DD",
        month: { en: "MM", number: "MM" },
        weekday: { en: "DD" },
        year: "YYYY"
    })

    const [allCountries, setAllCountries] = useState([]);
    const [allCities, setAllCities] = useState([])

    const [country, setCountry] = useState('Morocco')
    const [city, setCity] = useState('')
    const [capital, setCapital] = useState('')


    useEffect(() => {
        GetTimings(city, country, setTiming, setDateGregorian, setDateHijri);
        GetCities(setAllCities, country);
        GetCapital(setCapital, country);
    }, [country, city]);

    useEffect(() => {
        GetCountries(setAllCountries);
        const t = moment();
        setTimeNow(t.format('h:mm:ss'))
        CurrentPrayerAndNextPrayer(moment(), moment, "hh:mm", timings, setCurrentPrayerAndNextPrayer)
    }, []);

    const values = {
        timeNow,
        timings,
        dateGregorian,
        dateHijri,
        allCountries,
        allCities,
        country,
        setCountry,
        city,
        setCity,
        capital,
        currentPrayerAndNextPrayer,

    }
    return (
        <ApiPrayersContext.Provider value={values}>
            {params.children}
        </ApiPrayersContext.Provider>
    );
}

