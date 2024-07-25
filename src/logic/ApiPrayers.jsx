import { useEffect, useState, createContext } from 'react';
import moment from 'moment';
import GetTimings from './API/GetTimings';
import GetCountries from './API/GetCountries';
import GetCities from './API/GetCities';
import GetCapital from './API/GetCapital';
import CurrentPrayerAndNextPrayer from './CurrentPrayerAndNextPrayer';
import TimeNextPrayer from './TimeNextPrayer';

export const ApiPrayersContext = createContext(null);

export default function ApiPrayers(params) {

    const [currentPrayerAndNextPrayer, setCurrentPrayerAndNextPrayer] = useState({
        currentPrayer: 0,
        nextPrayer: 1,
        timeNow: '00:00:00'
    })

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
        CurrentPrayerAndNextPrayer(moment(), moment, "hh:mm", timings, setCurrentPrayerAndNextPrayer)
        TimeNextPrayer(currentPrayerAndNextPrayer.timeNow, '000')
    }, []);

    const values = {
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

