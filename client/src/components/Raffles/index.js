import React from 'react';
import img1 from '../../assets/img/cuc.jpg';
import img2 from '../../assets/img/shrekbeard.jpg';
import img3 from '../../assets/img/loan.jpg';
import img4 from '../../assets/img/angrycat.jpg';
import img5 from '../../assets/img/quarter.jpg';
import img6 from '../../assets/img/yatch.jpg';
import img7 from '../../assets/img/spork.jpg';
import img8 from '../../assets/img/bullymaguire.jpg';
import CardStock from '../CardStock';
import Grid from '@mui/material/Grid';

function CardContainer() {
    // react makes a call for DATA (from cache, DB)  --> look into HOOKS Apollo HOOK
    let DATA = [{title: "Cucumber", description: "Sweet Savory Cucumber", image: img1 }, 
    {title: "Shrek Beard", description: "Shrek Beard portrait with matching fedora", image: img2 }, 
    {title: "Payday loan", description: "Payday loan ranging from $5-500", image: img3}, 
    {title: "Angry Cat", description: "Angry fluffy cat", image: img4}, 
    {title: "Quarter", description: "Shiny new quarter", image: img5},
    {title: "Swan Yacht", description: "Mega swan yacht", image: img6},
    {title: "Spork", description: "Titanium spork", image: img7},
    {title: "Bully Maguire ornament", description: "Festive Bully Maguire Christmas ornament", image: img8}]; // --> Think of this as STATE
    let firstItem = DATA[0];
    let secondItem = DATA[1];
    let thirdItem = DATA[2];
    let fourthItem = DATA[3];
    let fifthItem = DATA[4];
    let sixthItem = DATA[5];
    let seventhItem = DATA[6];
    let eighthItem = DATA[7];
    return (
        // How do we we return multiple cards?  --> think FOR loop
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
        <CardStock data = {firstItem}/>
        </Grid>
        <Grid item xs={3}>
        <CardStock data = {secondItem}/>
        </Grid>
        <Grid item xs={3}>
        <CardStock data = {thirdItem}/>
        </Grid>
        <Grid item xs={3}>
        <CardStock data = {fourthItem}/>
        </Grid>
        <Grid item xs={3}>
        <CardStock data = {fifthItem}/>
        </Grid>
        <Grid item xs={3}>
        <CardStock data = {sixthItem}/>
        </Grid>
        <Grid item xs={3}>
        <CardStock data = {seventhItem}/>
        </Grid>
        <Grid item xs={3}>
        <CardStock data = {eighthItem}/>
        </Grid>
        </Grid>


    )
}

export default CardContainer;
