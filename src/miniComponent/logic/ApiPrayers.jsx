import { useEffect, useState, createContext } from 'react';
import axios from 'axios';
import moment from 'moment';

export const ApiPrayersContext = createContext(null);

export default function ApiPrayers(params) {
    const timeH = moment().format('h:mm:ss');
    // console.log(time)


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


    // Get timing prayers
    const getTimings = async () => {
        try {
            const response = await axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}`);
            setTiming(response.data.data.timings);
            setDateGregorian(response.data.data.date.gregorian);
            setDateHijri(response.data.data.date.hijri);
        } catch (error) {
            console.error("Error fetching timings:", error);
        }
    };

    // Get all countries
    const getCountries = async () => {
        try {
            const response = await axios.get("https://countriesnow.space/api/v0.1/countries/iso");
            setAllCountries(response.data.data);
        } catch (error) {
            console.error("Error fetching countries:", error);
        }
    };

    // Get all cities related to one country
    const getCities = async () => {
        try {
            const response = await axios.post('https://countriesnow.space/api/v0.1/countries/cities',
                { country: country })
            setAllCities(response.data.data)
            // console.log(response.data.data);
        } catch (error) {
            console.error("Error fetching cities:", error);
        }
    };

    // Get capital
    const getCapital = async () => {
        try {
            const response = await axios.post('https://countriesnow.space/api/v0.1/countries/capital',
                { country: country })
            setCapital(response.data.data.capital)
            // console.log(response.data.data.capital);
        } catch (error) {
            console.error("Error fetching capital:", error);
        }
    };



    useEffect(() => {
        getTimings();
        getCities();
        getCapital();
    }, [country, city]);

    useEffect(() => {
        getCountries();
    }, []);

    const values = {
        timeH,
        timings,
        dateGregorian,
        dateHijri,
        allCountries,
        allCities,
        country,
        setCountry,
        city,
        setCity,
        capital
    }
    return (
        <ApiPrayersContext.Provider value={values}>
            {params.children}
        </ApiPrayersContext.Provider>
    );
}

