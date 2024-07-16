
import SecondaryTitle from "../miniComponent/titles/SecondaryTitle";
import TertiaryTitle from "../miniComponent/titles/TertiaryTitle";

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function PrayerTimeRemaining() {
    return (
        <Card>
            <CardContent>
                <Typography >
                    <TertiaryTitle tertiaryTitle="Remaining until noon prayer" />
                </Typography>
                <Typography >
                    <SecondaryTitle secondaryTitle="12:22:30" />
                </Typography>
            </CardContent>
        </Card>
    )
}
