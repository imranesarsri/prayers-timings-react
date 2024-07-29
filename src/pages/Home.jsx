
import Main from '../miniComponent/layouts/Main';
import SectionMenu from '../sections/SectionMenu';
import SectionCardPrayer from '../sections/SectionCardPrayer';
import SectionHeader from '../sections/SectionHeader';
import SectionInfoCity from '../sections/SectionInfoCity';
import SectionTimingAllPrayers from '../sections/SectionTimingAllPrayers';
import SecrionPrayerDefinitions from '../sections/SecrionPrayerDefinitions';
import SectionFooter from '../sections/SectionFooter';
import ApiPrayersProvider from '../logic/ApiPrayersProvider';

export default function Home() {
    return (

        <Main>
            <SectionMenu />
            <ApiPrayersProvider>
                <SectionHeader />
                <SectionInfoCity />
                <SectionCardPrayer />
                <SectionTimingAllPrayers />
            </ApiPrayersProvider>
            <SecrionPrayerDefinitions />
            <SectionFooter />
        </Main>
    )
}
