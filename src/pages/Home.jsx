
import Main from '../miniComponent/layouts/Main';
import SectionMenu from '../sections/SectionMenu';
import SectionCardPrayer from '../sections/SectionCardPrayer';
import SectionHeader from '../sections/SectionHeader';
import SectionInfoCity from '../sections/SectionInfoCity';

export default function Home() {
    return (

        <Main>
            <SectionMenu />
            <SectionHeader />
            <SectionInfoCity />
            <SectionCardPrayer />
        </Main>
    )
}
