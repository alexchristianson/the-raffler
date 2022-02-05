import React from 'react';
import img1 from '../../assets/img/cuc.jpg';
import img2 from '../../assets/img/shrekbeard.jpg';
import img3 from '../../assets/img/loan.jpg';
import img4 from '../../assets/img/angrycat.jpg';
import img5 from '../../assets/img/quarter.jpg';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';  

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image = "img1"
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cucumber
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Sweet Savory Cucumber
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Get a Ticket</Button>
      </CardActions>

      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image = "img2"
        alt=""
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Shrek Beard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Shrek Beard with matching fedora
        </Typography>
      </CardContent>
      </Card>
    </Card>
  );
}
