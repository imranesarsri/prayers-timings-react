import CityDateTime from '../component/CityDateTime';
import Row_2 from '../miniComponent/layouts/Row_2';
import PrayerTimeRemaining from '../component/PrayerTimeRemaining';

export default function SectionInfoCity() {
    return (
        <Row_2>
            <PrayerTimeRemaining />
            <CityDateTime />
        </Row_2>)
}
