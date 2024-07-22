
import Main from '../miniComponent/layouts/Main';
import SectionMenu from '../sections/SectionMenu';
import SectionCardPrayer from '../sections/SectionCardPrayer';
import SectionHeader from '../sections/SectionHeader';
import SectionInfoCity from '../sections/SectionInfoCity';
import SectionTimingAllPrayers from '../sections/SectionTimingAllPrayers';
import SecrionPrayerDefinitions from '../sections/SecrionPrayerDefinitions';
import SectionFooter from '../sections/SectionFooter';
import ApiPrayers from '../miniComponent/logic/ApiPrayers';

export default function Home() {
    return (

        <Main>
            <SectionMenu />
            <ApiPrayers>
                <SectionHeader />
                <SectionInfoCity />
                <SectionCardPrayer />
                <SectionTimingAllPrayers />
            </ApiPrayers>
            <SecrionPrayerDefinitions />
            <SectionFooter />
        </Main>
    )
}
