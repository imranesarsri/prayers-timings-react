import Button from '@mui/material/Button';
import CardPrayer from '../component/CardPrayer';
import Row_5 from '../sections/Row_5';
import Main from '../sections/Main';
import Menu from '../component/Menu';

export default function Home() {
    return (

        <Main>
            <Menu />
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <Button variant="contained">Contained</Button>
            <Row_5>
                <CardPrayer />
                <CardPrayer />
                <CardPrayer />
                <CardPrayer />
                <CardPrayer />
                <CardPrayer />
            </Row_5>
        </Main>
    )
}
