import CityDateTime from '../component/CityDateTime';
import Row_2 from '../miniComponent/layouts/Row_2';
import PrayerTimeRemaining from '../component/PrayerTimeRemaining';
import Container from '../miniComponent/layouts/Container';
import { useContext, useEffect } from 'react';
import CurrentPrayerAndNextPrayer from '../logic/CurrentPrayerAndNextPrayer';
import moment from 'moment';
import { ApiPrayersContext } from '../logic/ApiPrayers';
import TimeNextPrayer from '../logic/TimeNextPrayer';

export default function SectionInfoCity() {

    const { timings, setCurrentPrayerAndNextPrayer, currentPrayerAndNextPrayer, setTimeRemainingNextPrayer } = useContext(ApiPrayersContext)


    // Calculate current prayer, next prayer, and time remaining when timings change
    useEffect(() => {
        CurrentPrayerAndNextPrayer(moment(), moment, "hh:mm", timings, setCurrentPrayerAndNextPrayer);
        let interval = setInterval(() => {
            CurrentPrayerAndNextPrayer(moment(), moment, "hh:mm", timings, setCurrentPrayerAndNextPrayer);
        }, 60000);

        return () => {
            clearInterval(interval);
        };
    }, [timings]);

    useEffect(() => {
        TimeNextPrayer(currentPrayerAndNextPrayer.timeNow, currentPrayerAndNextPrayer.timeNextPrayer, setTimeRemainingNextPrayer);
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
