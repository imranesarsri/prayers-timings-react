import CityDateTime from '../component/CityDateTime';
import Row_2 from '../miniComponent/layouts/Row_2';
import PrayerTimeRemaining from '../component/PrayerTimeRemaining';
import Container from '../miniComponent/layouts/Container';

export default function SectionInfoCity() {
    return (
        <Container>
            <Row_2>
                <PrayerTimeRemaining />
                <CityDateTime />
            </Row_2>
        </Container>
    )
}
