
export default function CurrentPrayerAndNextPrayer(momentObj, moment, format, timings, setCurrentPrayerAndNextPrayer) {
    if (momentObj.isAfter(moment(timings["Asr"], format))) {
        if (momentObj.isAfter(moment(timings["Maghrib"], format))) {
            if (momentObj.isAfter(moment(timings["Isha"], format))) {
                setCurrentPrayerAndNextPrayer({ currentPrayer: 5, nextPrayer: 1 });
            } else {
                setCurrentPrayerAndNextPrayer({ currentPrayer: 4, nextPrayer: 5 });
            }
        } else {
            setCurrentPrayerAndNextPrayer({ currentPrayer: 3, nextPrayer: 4 });
        }
    } else if (momentObj.isBefore(moment(timings["Asr"], format))) {
        if (momentObj.isBefore(moment(timings["Dhuhr"], format))) {
            if (momentObj.isBefore(moment(timings["Fajr"], format))) {
                setCurrentPrayerAndNextPrayer({ currentPrayer: 5, nextPrayer: 1 });
            } else {
                setCurrentPrayerAndNextPrayer({ currentPrayer: 1, nextPrayer: 2 });
            }
        } else {
            setCurrentPrayerAndNextPrayer({ currentPrayer: 2, nextPrayer: 3 });
        }
    }
}
