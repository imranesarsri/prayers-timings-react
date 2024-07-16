import CardPrayer from '../component/CardPrayer';
import Row_5 from '../miniComponent/layouts/Row_5';

export default function SectionCardPrayer() {
    return (
        <Row_5>
            <CardPrayer name="fajr" time="06:11" />
            <CardPrayer name="dhhr" time="12:45" />
            <CardPrayer name="asr" time="05:13" />
            <CardPrayer name="night" time="8:09" />
            <CardPrayer name="sunset" time="10:32" />
        </Row_5>
    )
}
