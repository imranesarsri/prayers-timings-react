
import moment from 'moment-timezone';
import Timezones from '../data/Timezones.json'

export default function GetCurrentTimeInTimezone(timezone, setCurrentPrayerAndNextPrayer) {
    const TZ = Timezones[timezone];
    if (!TZ) {
        setCurrentPrayerAndNextPrayer(moment().tz('MA').format('HH:mm:ss'));
    }
    // setCurrentPrayerAndNextPrayer({ timeNow: moment().tz(TZ).format('HH:mm:ss') });
    setCurrentPrayerAndNextPrayer({ currentPrayer: 5, nextPrayer: 1, timeNow: moment().tz(TZ).format('HH:mm:ss'), timeNextPrayer: '08:45' });
}
