import { useContext } from 'react';
import CardPrayer from '../component/CardPrayer';
import Row_5 from '../miniComponent/layouts/Row_5';
// import axios from 'axios';
import PrimaryHeader from '../miniComponent/headers/PrimaryHeader';
import Container from '../miniComponent/layouts/Container';
import { ApiPrayersContext } from '../miniComponent/logic/ApiPrayers';

export default function SectionCardPrayer() {

    const timings = useContext(ApiPrayersContext)
    return (
        <Container>
            <PrimaryHeader primaryHeader="Today's Prayer Times" />
            <Row_5>
                <CardPrayer title="fajr" time={timings.timings.Fajr} />
                <CardPrayer title="dhhr" time={timings.timings.Dhuhr} />
                <CardPrayer title="asr" time={timings.timings.Asr} />
                <CardPrayer title="maghrib" time={timings.timings.Maghrib} />
                <CardPrayer title="sunset" time={timings.timings.Isha} />
            </Row_5>
        </Container>

    )
}
