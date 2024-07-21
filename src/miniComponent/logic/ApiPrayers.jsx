import { useEffect, useState, createContext } from 'react';
import axios from 'axios';

export const ApiPrayersContext = createContext(null);

export default function ApiPrayers(params) {
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

    const getTimings = async () => {
        const response = await axios.get("https://api.aladhan.com/v1/timingsByCity?city=Tanger&country=Morocco");
        setTiming(response.data.data.timings);
        setDateGregorian(response.data.data.date.gregorian)
        setDateHijri(response.data.data.date.hijri)
        // console.log(response.data)
        console.log(dateGregorian)
    };

    useEffect(() => {
        getTimings();
    }, []);

    const values = {
        timings,
        dateGregorian,
        dateHijri
    }
    return (
        <ApiPrayersContext.Provider value={values}>
            {params.children}
        </ApiPrayersContext.Provider>
    );
}

