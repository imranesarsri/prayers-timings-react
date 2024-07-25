
export default function CurrentPrayerAndNextPrayer(momentObj, moment, format, timings, setCurrentPrayerAndNextPrayer) {
    if (momentObj.isAfter(moment(timings["Fajr"], format)) && momentObj.isBefore(moment(timings["Dhuhr"], format))) {
        setCurrentPrayerAndNextPrayer({ currentPrayer: 1, nextPrayer: 2, timeNow: momentObj.format('HH:mm:ss'), timeNextPrayer: timings["Dhuhr"] });
    } else if (momentObj.isAfter(moment(timings["Dhuhr"], format)) && momentObj.isBefore(moment(timings["Asr"], format))) {
        setCurrentPrayerAndNextPrayer({ currentPrayer: 2, nextPrayer: 3, timeNow: momentObj.format('HH:mm:ss'), timeNextPrayer: timings["Asr"] });
    } else if (momentObj.isAfter(moment(timings["Asr"], format)) && momentObj.isBefore(moment(timings["Maghrib"], format))) {
        setCurrentPrayerAndNextPrayer({ currentPrayer: 3, nextPrayer: 4, timeNow: momentObj.format('HH:mm:ss'), timeNextPrayer: timings["Maghrib"] });
    } else if (momentObj.isAfter(moment(timings["Maghrib"], format)) && momentObj.isBefore(moment(timings["Isha"], format))) {
        setCurrentPrayerAndNextPrayer({ currentPrayer: 4, nextPrayer: 5, timeNow: momentObj.format('HH:mm:ss'), timeNextPrayer: timings["Isha"] });
    } else {
        setCurrentPrayerAndNextPrayer({ currentPrayer: 5, nextPrayer: 1, timeNow: momentObj.format('HH:mm:ss'), timeNextPrayer: timings["Fajr"] });
    }
}
