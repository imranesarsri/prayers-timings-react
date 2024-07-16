import SecondaryTitle from "../miniComponent/titles/SecondaryTitle";
import TertiaryTitle from "../miniComponent/titles/TertiaryTitle";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';



export default function CityDateTime() {
    return (
        <Card>
            <CardContent >
                <Typography>
                    <TertiaryTitle tertiaryTitle="Frinday, 12 July 2024" />
                </Typography>
                <Typography>
                    <SecondaryTitle secondaryTitle="Morocco" />
                </Typography>
            </CardContent>
        </Card>
    )
}
