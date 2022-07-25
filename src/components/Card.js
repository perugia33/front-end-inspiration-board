import React from "react";
// import PropTypes from "prop-types";
import "./Card.css";
import {useState } from "react";

function Card(props){

  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1);
   }
     
 
  return(

      
      <div className="wrapper">
       

          <div className="cards">
            <div className={props.card1}> </div>
            {/* <img src={image} alt="love poster" /> */}
            <h5> {props.message1}</h5>
          </div>
          

          <div className="cards">
            <div className={props.card2}> 
            </div>
          </div>

          <div className="cards_icons"> 
              <p     
              onClick={incrementCount}
              >            
              💙  
              </p>
            <p>{count}</p>     
          </div>  

          <div className="cards"> 
            <div className={props.card3}></div>
            {/* <img src={image} alt="love poster" /> */}
            <h5>{props.message2}</h5>
            
          </div>

          <div className="cards"> 
            <div className={props.card4}></div>
        
          
          </div>

          {/* <div className="cards_icons"> 
              <p     
              onClick={incrementCount}
              >            
              💙  
              </p>
            <p>{count}</p>     
          </div>    */}

      </div>

      )
  // <div className="border-polaroid">
  //      <img
  //         className="delete"
          
  //        src={require("../images/x-icon.png")}
  //          alt="x"
  //        />
  //       <div className="message">
  //          <p>Namaste</p>
  //       </div>
  //       <div className="like-container">
  //          <img
  //            className="like"
             
  //             src={require("../images/heart.png")}
  //            alt="❤️"
  //          />{" "}
  //          <span className="count">9</span>
  //       </div>
  //     </div> 
     // const updateCount = updatedCount =>{
         // const imgSrc = require(props.image).default;
  
  };
  



export default Card;
