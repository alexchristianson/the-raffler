import React from 'react';
import img1 from '../../assets/img/cuc.jpg';
import img2 from '../../assets/img/shrekbeard.jpg';
import img3 from '../../assets/img/loan.jpg';
import img4 from '../../assets/img/angrycat.jpg';
import img5 from '../../assets/img/quarter.jpg';
import CardStock from '../CardStock';
import Grid from '@mui/material/Grid';
import { ListItem } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';  

function CardContainer() {
    // react makes a call for DATA (from cache, DB)  --> look into HOOKS Apollo HOOK
    let DATA = [{title: "Cucumber", description: "Sweet Savory Cucumber", image: img1 }, {name: "Shrek Beard", description: "Shrek Beard with matching fedora", image: img2 }, {name: "Payday loan", description: "Payday loan ranging from $5-500", image: img3}, {name: "Angry Cat", description: "Angry fluffy cat", image: img4}, {name: "Quarter", description: "Shiny new quarter", image: img5}]; // --> Think of this as STATE
    let firstItem = DATA[0];
    let secondItem = DATA[1];
    let thirdItem = DATA[2];
    let fourthItem = DATA[3];
    let fifthItem = DATA[4];
    return (
        // How do we we return multiple cards?  --> think FOR loop
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={6}>
        <CardStock data = {firstItem}/>
        </Grid>
        <Grid item xs={6}>
        <CardStock data = {secondItem}/>
        </Grid>
        <Grid item xs={6}>
        <CardStock data = {thirdItem}/>
        </Grid>
        <Grid item xs={6}>
        <CardStock data = {fourthItem}/>
        </Grid>
        </Grid>


    )
}

export default CardContainer;
