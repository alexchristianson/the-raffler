import React from "react";
import raffleimg from '../assets/logos/raffle-pic.png'
import auth from "../utils/auth";
import Raffles from '../components/Raffles';
import CountDownTimer from "../components/CountDownTimer";

const Home = () => {
  const hoursMinSecs = {hours:1, minutes: 20, seconds: 40}
  if(auth.loggedIn()){

    
    return(
      <div>
          <Raffles/>
      </div>
    )
  }else{
  return (
    <div className="dash-container">

<div>
  <h1 className="dash-text">Feeling Lucky? <br/>
    Start Winning!
  </h1>
<a href="/signup"><button className="tick-btn">Get Tickets</button></a> 
</div>
<img  className="raffle-img"src={raffleimg} alt="Raffle Machine"/>
<div>

</div>
<CountDownTimer hoursMinSecs={hoursMinSecs}/>
    </div>
  );
  }
};

export default Home;