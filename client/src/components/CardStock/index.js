import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography'; 

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
            alt=""
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