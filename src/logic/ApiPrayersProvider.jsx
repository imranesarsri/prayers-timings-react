import { useEffect, useState, createContext } from 'react';
import GetTimings from './API/GetTimings';
import GetCountries from './API/GetCountries';
import GetCities from './API/GetCities';
import GetCapital from './API/GetCapital';

// Create a context for API prayers data
export const ApiPrayersContext = createContext(null);

export default function ApiPrayersProvider(params) {

    // *********************************************
    // ***************** useState ******************
    // *********************************************
    const [getCurrentTimeInTimezone, setGetCurrentTimeInTimezone] = useState('MA')
    const [getCurrentPeriod, setGetCurrentPeriod] = useState('AM')
    // State to keep track of the time remaining until the next prayer
    const [timeRemainingNextPrayer, setTimeRemainingNextPrayer] = useState('00:00:00');
    // State to store current and next prayer details
    const [currentPrayerAndNextPrayer, setCurrentPrayerAndNextPrayer] = useState({
        currentPrayer: 1,
        nextPrayer: 2,
        timeNow: '00:00:00',
        timeNextPrayer: '00:00'
    });

    // State to manage prayer timings
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

    // State for Gregorian date
    const [dateGregorian, setDateGregorian] = useState({
        date: "DD-MM-YYYY",
        day: "DD",
        month: { en: "MM", number: "MM" },
        weekday: { en: "DD" },
        year: "YYYY"
    });

    // State for Hijri date
    const [dateHijri, setDateHijri] = useState({
        date: "DD-MM-YYYY",
        day: "DD",
        month: { en: "MM", number: "MM" },
        weekday: { en: "DD" },
        year: "YYYY"
    });

    // State to manage the list of countries and cities
    const [allCountries, setAllCountries] = useState([]);
    const [allCities, setAllCities] = useState([]);

    // State for selected country, city, and capital
    const [country, setCountry] = useState({
        name: "Morocco",
        Iso2: "MA"
    });
    const [city, setCity] = useState('');
    const [capital, setCapital] = useState('');



    // *********************************************
    // ***************** useEffect *****************
    // *********************************************
    // Fetch timings, cities, and capital when country or city changes
    useEffect(() => {
        GetTimings(city, country, setTiming, setDateGregorian, setDateHijri);
        GetCities(setAllCities, country);
        GetCapital(setCapital, country);
    }, [country, city]);


    useEffect(() => {
        GetCountries(setAllCountries);
    }, [])


    // *********************************************
    // *************** Import Values ***************
    // *********************************************
    // Context values to be provided to other components
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
        setCurrentPrayerAndNextPrayer,
        timeRemainingNextPrayer,
        setTimeRemainingNextPrayer,
        getCurrentPeriod,
        setGetCurrentPeriod,
        getCurrentTimeInTimezone,
        setGetCurrentTimeInTimezone
    };

    return (
        <ApiPrayersContext.Provider value={values}>
            {params.children}
        </ApiPrayersContext.Provider>
    );
}
