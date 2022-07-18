import React from 'react';

import image from './images/nostalgiaLogo .png'
import './App.css';
import BoardList from './components/BoardList';
import CardList from './components/CardList';
import {Button} from  '@material-ui/core';
import cardMessages from './data/messages.json';
import {useState} from 'react';

console.log(cardMessages);

function App() {
  // const boards = [
  //   { id: '70s', name: "70's Board"},
  //   { id: '80s', name: "80's Board"}
  // ];

 
  const [cardData, setCardData] = useState(cardMessages)
  const updateCardData = updatedCard => {
    console.log({updatedCard})
    const messages = cardData.map(card => {
      if(card.id === updatedCard.id){
        
        return updatedCard;
      } else{
        return card;
      }
      });
    setCardData(messages);
  };
  return (
    <div className="container">
      
      <header >
        <div id = "header">
          <img src = {image} alt = "logo" id ="logo"  height={55} width= {5}/>
           <h3>Nostalgia</h3>
           <div className="dropdown">
            <h3 className="dropbtn_nav">Inspirational Boards
              <div className="dropdown-content">
                  <a href="/"> 70's Board</a>
                  <a href="/">80's Board</a>
                  <a href="/">90's Board</a>
              </div>
            </h3>
          </div>  
        </div>
      </header>
      <section className="dropdown">
        <button className="dropbtn">Select a Board</button>
        <div className="dropdown-content">
        
          <select >     
          
            <option value= "70's Board"> 70's Board  </option>
            <option value= "80's Board" >80's Board</option>
            <option value= "90's Board">90's Board</option>
          </select>
 
        </div>
        <button className="dropbtn"> Selected 70'S Board</button>
       
        <button className="dropbtn">Create New Card</button>
        {/* <div className="dropdown-content">
        
        </div> */}
      </section>


      <main className = "board_container">
        
          <div className= "boards_1" >
           <BoardList />
            
            <hr/>
        

            <div >
              <CardList 
               messages={cardData}
               onUpdateCard={updateCardData}
              />
             
            </div>

          </div>

          {/* <div id ="selected">Selected Board</div> */}
       
        
        
      
        {/* <input type = "text">Selected</input> */}
        <div className ="boards_2" >
          <div id = "create_new_board">
            <p>Create New Board</p>
           
            <Button variant="text">Text</Button>
            <button onClick= {() => console.log("Button Clicked")}
             id ="add_board_btn">
              Add Board 
              </button>
          </div>

          <div className="form_container">
            <form  id = "new_form" >
              <div className="field">
                <label>Title: </label>
                <input type="text" placeholder="Title" />
              </div>
              <div className="field">
                <label>Owner: </label>
                <input type="text" placeholder="Owner" />    
              </div>
              <div id = "submit">
                <input id = "submit_btn" type="submit" placeholder="Submit" />
                <button id = "hide_btn" > Hide Form</button>
              </div>
              
            </form>
          </div>
      
          
          <div class = "create_card">
              <h4>Create New Card</h4>
              {/* <label>Message </label> */}
              <textarea rows="2" placeholder='Message'></textarea>

              <button id = "add_card_btn" type= "submit">Submit</button>
          </div>
        

        </div>

        

      </main>
    </div>
  );
      
}

export default App;
