import CityDateTime from '../component/CityDateTime';
import Row_2 from '../miniComponent/layouts/Row_2';
import PrayerTimeRemaining from '../component/PrayerTimeRemaining';
import Container from '../miniComponent/layouts/Container';
import { useContext, useEffect } from 'react';
import CurrentPrayerAndNextPrayer from '../logic/CurrentPrayerAndNextPrayer';
import { ApiPrayersContext } from '../logic/ApiPrayers';
import TimeRemainingNextPrayer from '../logic/TimeRemainingNextPrayer';
import GetCurrentPeriod from '../logic/GetCurrentPeriod';

export default function SectionInfoCity() {

    const { timings, setCurrentPrayerAndNextPrayer, currentPrayerAndNextPrayer, setTimeRemainingNextPrayer, getCurrentPeriod, setGetCurrentPeriod, getCurrentTimeInTimezone } = useContext(ApiPrayersContext)

    // Calculate current prayer, next prayer, and time remaining when timings change
    useEffect(() => {
        CurrentPrayerAndNextPrayer("hh:mm", timings, setCurrentPrayerAndNextPrayer, getCurrentTimeInTimezone, getCurrentPeriod);
        let interval = setInterval(() => {
            CurrentPrayerAndNextPrayer("hh:mm", timings, setCurrentPrayerAndNextPrayer, getCurrentTimeInTimezone, getCurrentPeriod);

            GetCurrentPeriod(setGetCurrentPeriod)

        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, [timings]);

    useEffect(() => {
        TimeRemainingNextPrayer(currentPrayerAndNextPrayer.timeNow, currentPrayerAndNextPrayer.timeNextPrayer, setTimeRemainingNextPrayer, getCurrentPeriod);
    })

    return (
        <Container>
            <Row_2>
                <PrayerTimeRemaining />
                <CityDateTime />
            </Row_2>
        </Container>
    )
}
