import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@mui/material';

function CardStock(props) {
    // console.log(props);
    // console.log(props.data);
    let objectData = props.data;
    let { name, description, image } = objectData;
    const findWinner = () => {
        return objectData.ticketArray[Math.floor(Math.random()*objectData.ticketArray.length)].username
    }
    let ticketNumber = objectData.ticketArray.length;
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
            {name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {description}
            </Typography>
            {ticketNumber <= 2 ? <Typography variant='body2'>Number of Tickets Bought: {ticketNumber}</Typography> : <Typography variant='body2'>{findWinner()}</Typography>}
        </CardContent>
        <CardActions>
            <Button size="small">Get a Ticket</Button>
        </CardActions>
        </Card>
    )
}

export default CardStock;