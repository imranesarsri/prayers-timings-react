import { useEffect, useState } from 'react';
import CardPrayer from '../component/CardPrayer';
import Row_5 from '../miniComponent/layouts/Row_5';
import axios from 'axios';
import PrimaryHeader from '../miniComponent/headers/PrimaryHeader';
import Container from '../miniComponent/layouts/Container';

export default function SectionCardPrayer() {
    const getTimings = async () => {
        const response = await axios.get(" https://api.aladhan.com/v1/timingsByCity?city=Washington&country=United States")
        // console.log(response.data.data.timings)
        setTiming(response.data.data.timings)
    }

    useEffect(() => {
        getTimings()
    })
    const [timings, setTiming] = useState({
        Fajr: "00:00",
        Sunrise: "00:00",
        Dhuhr: "00:00",
        Asr: "00:00",
        Sunset: "00:00",
        Maghrib: "00:00",
        Isha: "00:00",
        Imsak: "00:00",
        Midnight: "00:00",
        Firstthird: "00:00",
        Lastthird: "00:00"
    }


    )
    return (
        <Container>
            <PrimaryHeader primaryHeader="Today's Prayer Times" />
            <Row_5>
                <CardPrayer name="fajr" time={timings.Fajr} />
                <CardPrayer name="dhhr" time={timings.Dhuhr} />
                <CardPrayer name="asr" time={timings.Asr} />
                <CardPrayer name="night" time={timings.Maghrib} />
                <CardPrayer name="sunset" time={timings.Isha} />
            </Row_5>
        </Container>

    )
}
