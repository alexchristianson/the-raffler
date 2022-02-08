import { useQuery } from '@apollo/client';  // We bring in the Hook to request data
import { QUERY_USER, QUERY_ME } from '../../utils/queries';   // WE bring in the reference for the QUERY to the backend (API)
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

    // This will query the API (backend) Database for Data
    const { loading, data } = useQuery(QUERY_ME);  // remember this is an async process
    console.log(data);  // this will be 'undefined' UNTIL loading completes and puts the info into 'data'
    const raffleData = data?.me || [];  // Unitl we get data loaded into 'raffleData' we initialize an empty array []
    console.log(raffleData);

    return (

        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
            { DATA && DATA.map( (item) => (
                <Grid item xs={3}>
                    <CardStock data = {item}/>
                </Grid>
            ))}
        </Grid>
    )
}

export default CardContainer;
