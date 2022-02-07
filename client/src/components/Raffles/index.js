import img1 from '../../assets/img/cuc.jpg';
import img2 from '../../assets/img/shrekbeard.jpg';
import img3 from '../../assets/img/loan.jpg';
import img4 from '../../assets/img/angrycat.jpg';
import img5 from '../../assets/img/quarter.jpg';
import img6 from '../../assets/img/yatch.jpg';
import img7 from '../../assets/img/spork.jpg';
import img8 from '../../assets/img/bullymaguire.jpg';
import CardStock from '../CardStock';
import {Grid} from '@mui/material';

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
    return (
        // How do we we return multiple cards?  --> think FOR loop
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item xs={3}>
        <CardStock data = {DATA[0]}/>
        </Grid>
        <Grid item xs={3}>
        <CardStock data = {DATA[1]}/>
        </Grid>
        <Grid item xs={3}>
        <CardStock data = {DATA[2]}/>
        </Grid>
        <Grid item xs={3}>
        <CardStock data = {DATA[3]}/>
        </Grid>
        <Grid item xs={3}>
        <CardStock data = {DATA[4]}/>
        </Grid>
        <Grid item xs={3}>
        <CardStock data = {DATA[5]}/>
        </Grid>
        <Grid item xs={3}>
        <CardStock data = {DATA[6]}/>
        </Grid>
        <Grid item xs={3}>
        <CardStock data = {DATA[7]}/>
        </Grid>
        </Grid>


    )
}

export default CardContainer;
