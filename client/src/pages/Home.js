import React from "react";
import raffleimg from '../assets/logos/raffle-pic.png'
import auth from "../utils/auth";
import Raffles from '../components/Raffles';
import CountDownTimer from "../components/CountDownTimer";
import {Link} from 'react-router-dom';

const Home = () => {
  const hoursMinSecs = {hours:1, minutes: 20, seconds: 40}
  if(auth.loggedIn()){
    return(
      <div>
          <Raffles/>
      </div>
    )
  } else {
    return (
      <div className="dash-container">
        <div>
          <h1 className="dash-text">Feeling Lucky? <br/>
            Start Winning!
          </h1>
        <Link to="/signup"><button className="tick-btn">Get Tickets</button></Link> 
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