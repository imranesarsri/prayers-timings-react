import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import { imageFajr, imageDhhr, imageAsr, imageNight, imageSunset, logo } from '../../public';


export default function CardPrayer(params) {

    let prayer = '';

    switch (params.name) {
        case 'fajr':
            prayer = imageFajr;
            break;
        case "dhhr":
            prayer = imageDhhr;
            break;
        case "asr":
            prayer = imageAsr;
            break;
        case "night":
            prayer = imageNight;
            break;
        case "sunset":
            prayer = imageSunset;
            break;
        default:
            prayer = logo;
    }

    return (
        <Card sx={{ maxWidth: 345 }} style={{ marginBottom: '20px' }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={prayer}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h4" component="div">
                        {params.name}
                    </Typography>
                    <Typography variant="h1" color="text.secondary">
                        {params.time}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>)
}
