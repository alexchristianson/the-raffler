import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';

function CardStock(props) {
    console.log(props);
    console.log(props.data);
    let objectData = props.data;
    let { title, description, image } = objectData;
    return (
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
            component="img"
            height="140"
            image = {image}
            alt="raffle item"
        />
        <CardContent>
            <Typography gutterBottom variant="h5" component="div">
            {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small">Get a Ticket</Button>
        </CardActions>
        </Card>
    )
}

export default CardStock;