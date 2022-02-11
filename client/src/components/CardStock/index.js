import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@mui/material";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_TICKET } from "../../utils/mutations";
import { QUERY_TICKET } from "../../utils/queries";

function CardStock(props) {

  let raffleItem = props.data;
  let { _id, name, description, image, ticketArray } = raffleItem;
  let numberOfTickets = ticketArray.length;
  const [addTicket] = useMutation(ADD_TICKET);

  const findWinner = () => {
    var ticket = ticketArray[
      Math.floor(Math.random() * ticketArray.length)
    ];

    // const singleTicket = useQuery(QUERY_TICKET);
  };
  
  const handleGetATicketClick = async(event) => {
   try{
     const ticketClick = await addTicket({
      variables:{
          raffleId: event.target.dataset.raffleid,
      }
  })

    window.location.reload()
    console.log(ticketClick)
  } catch (err) {
    console.log(err)
  }
    // run the addTicket mutation
    // send in the above raffleid into the addTicket mutation
    // cross your fingers and pray that it all worked

    // flow from click to this function to the mutation to the mutations.js to the typedefs to the resolvers and you should see a change in the database
  }

  return (
    <Card sx={{maxWidth:'80%', margin: 'auto'}}>
      <CardMedia component="img" height="140" image={image} alt="raffle item" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
        {numberOfTickets <= 10 ? (
          <Typography variant="body2">
            Number of Tickets Bought: {numberOfTickets}
          </Typography>
        ) : (
          <Typography variant="body2">Raj is the Winner!</Typography>
        )}
      </CardContent>
      <CardActions>
        <Button size="small" data-raffleid={_id} onClick={handleGetATicketClick}>
          Get a Ticket
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardStock;
