import Timezones from '../data/Timezones.json';
import moment from 'moment-timezone';

export default function CurrentPrayerAndNextPrayer(format, timings, setCurrentPrayerAndNextPrayer, getCurrentTimeInTimezone, getCurrentPeriod) {
    const momentObj = moment();

    const Timezone = Timezones[getCurrentTimeInTimezone];


    if (getCurrentPeriod == "PM") {
        if (momentObj.isBefore(moment(timings["Dhuhr"], format))) {
            setCurrentPrayerAndNextPrayer({
                currentPrayer: 1,
                nextPrayer: 2,
                timeNow: moment().tz(Timezone).format('HH:mm:ss'),
                timeNextPrayer: timings["Dhuhr"]
            });
        } else if (momentObj.isBefore(moment(timings["Asr"], format))) {
            setCurrentPrayerAndNextPrayer({
                currentPrayer: 2,
                nextPrayer: 3,
                timeNow: moment().tz(Timezone).format('HH:mm:ss'),
                timeNextPrayer: timings["Asr"]
            });
        } else if (momentObj.isBefore(moment(timings["Maghrib"], format))) {
            setCurrentPrayerAndNextPrayer({
                currentPrayer: 3,
                nextPrayer: 4,
                timeNow: moment().tz(Timezone).format('HH:mm:ss'),
                timeNextPrayer: timings["Maghrib"]
            });
        } else if (momentObj.isBefore(moment(timings["Isha"], format))) {
            setCurrentPrayerAndNextPrayer({
                currentPrayer: 4,
                nextPrayer: 5,
                timeNow: moment().tz(Timezone).format('HH:mm:ss'),
                timeNextPrayer: timings["Isha"]
            });
        } else {
            setCurrentPrayerAndNextPrayer({
                currentPrayer: 5,
                nextPrayer: 1,
                timeNow: moment().tz(Timezone).format('HH:mm:ss'),
                timeNextPrayer: timings["Fajr"]
            });
        }
    } else {
        if (momentObj.isBefore(moment(timings["Fajr"], format))) {
            setCurrentPrayerAndNextPrayer({
                currentPrayer: 5,
                nextPrayer: 1,
                timeNow: moment().tz(Timezone).format('HH:mm:ss'),
                timeNextPrayer: timings["Fajr"]
            });
        } else {
            setCurrentPrayerAndNextPrayer({
                currentPrayer: 1,
                nextPrayer: 2,
                timeNow: moment().tz(Timezone).format('HH:mm:ss'),
                timeNextPrayer: timings["Dhuhr"]
            });

        }
    }

}
