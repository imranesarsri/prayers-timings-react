import TimingAllPrayers from "../component/TimingAllPrayers";
import PrimaryHeader from "../miniComponent/headers/PrimaryHeader";
import Container from "../miniComponent/layouts/Container";
import Row_1 from '../miniComponent/layouts/Row_1';

export default function SectionTimingAllPrayers() {
    return (
        <Container>
            <PrimaryHeader primaryHeader="All times" />

            <Row_1>
                <TimingAllPrayers />
            </Row_1>
        </Container>
    )
}
