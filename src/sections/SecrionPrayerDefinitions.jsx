import PrayerDefinitions from "../component/PrayerDefinitions";
import Container from "../miniComponent/layouts/Container";
import Row_1 from '../miniComponent/layouts/Row_1';
import prayersData from '../data/PrayerDefinitions.json';
import PrimaryHeader from "../miniComponent/headers/PrimaryHeader";

export default function SectionPrayerDefinitions() {

    function getPrayersData() {
        return prayersData.map(prayer => (
            <PrayerDefinitions
                key={prayer.id}
                name={prayer.nameEn}
                description={prayer.descriptionEn} />
        ));
    }

    return (
        <Container>
            <PrimaryHeader primaryHeader="Prayer Definitions" />
            <Row_1>
                {getPrayersData()}
            </Row_1>
        </Container>
    );
}
