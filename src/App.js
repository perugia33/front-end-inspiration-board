import "./App.css";
import image from './images/nostalgiaLogo .png'
import BoardList from "./components/BoardList";
import Card from "./components/Card";
import Board70 from "./routes/Board70";
import NewBoardForm from "./components/NewBoardForm";
import NewCardForm from "./components/NewCardForm";
import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
 
;
function App() {

  const [boards, setBoards] = useState([
    { id: '70s', name: "70's Board", title:"Love 💜 the 70", className: "board_70s",owner:"Team Nostalgia",
     likeCount:1, card1: "card_1", card2: "card_2",
     card3: "card_3", card4: "card_4",card5: "card_5",
    message1: "Everybody is a Star",message2: "Stay Calm and Remember the 70's"}, 

    { id: '80s', name: "80's Board",title:"Love 💜 the 80s", className: "board_80s", owner:"Team Nostalgia",
    likeCount:1, card1: "card_8", card2: "card_7",
    card3: "card_9", card4: "card_6",card5: "card_5",
   message1: "Just Chill",message2: " 'On My Darkest Days, I Wear My Brightest Colors' -Cyndi Lauper"},
    
   { id: '90s', name: "90's Board", title:"Love 💜 the 90s", className: "board_90s", owner:"Team Nostalgia",
   likeCount:1, card1: "card_11", card2: "card_12",
   card3: "card_13", card4: "",card5: "",
  message1: "You Are Going to Be Okay",message2: "Know Your Worth and Add Tax"}
  ,
   
   { id: '11', name: "New Board", title:"", className: "newBoard", owner:"",
    likeCount:1, card1: "card_16", card2: "",
    card18: "", card19: "",card20: "",
    message3: "", message4: ""
  },
  ])


  const[selectedOption, setSelectedOption] = useState(boards[0].id);
  const selectedOptionData= boards.find(item => item.id == selectedOption);

  const[newTitle, setNewTitle] = useState(boards[3].title);
  const[newOwner, setNewOwner] = useState(boards[3].owner)

  const[message1, setMessage1] = useState(boards[3].message1);
  
  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1);
   }
     
  const [isCardShown, setIsCardShown] = useState(false);

  const handleCardShown = event => {
    console.log("card shown clicked")
    setIsCardShown((visible) => !visible);
   };

  const handleAddButtonCLick = () => {
    setSelectedOption(boards[3].id)

    
     
  }


  const onFormSubmit = (e) => {
    e.preventDefault();
    setNewTitle(newTitle)
   };

  //  const onCardSubmit = (e) => {
  //   e.preventDefault();
    
  //  };
   


  // const cardList = [
  //   {id: '70sCard', title:"70's Card List", likesCount:0, message1:"", message2:""},
  //   {id: '80sCard', title:"80's Card List", likesCount:0, message1:"", message2:""},
  //   {id: 'newCard', title:"New Card List", likesCount:0, message1:"", message2:""}
  // ]


  return (
   
     <div className="container">
        <header>
          <div id="header">
              <img src={image} alt = "logo" id ="logo"  height={55} width= {5}/>
              <h3>Nostalgia</h3>
              <div className="dropdown">
                    
                      <nav className="navigation">
                       <h3> <Link to= "/board70">Inspirational Board</Link>  
                        </h3>  
                      </nav>                  
              </div>  
          </div> 
        </header>

        <section>
        <button className="dropbtn">Select a Board</button>
          <div className="dropdown-content">        
            <select
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}        
            >     
                {boards.map((item) => (
                    <option key={item.id} 
                      value={item.id}>
                                      
                      {item.name}          
                    </option>
                  ))}           
            </select>
          </div>
          <button className="dropbtn"> 
           
           {selectedOptionData.name} - {selectedOptionData.owner}</button>
         
            <button className="dropbtn"
            onClick={handleAddButtonCLick} 
            >Create New Board
            
            </button>
         

        </section>

        <main className = "board_container">


        <div className= "boards_1" >
            <BoardList  className={selectedOptionData.className}
                  name={selectedOptionData.name}
                  title={selectedOptionData.title}
                  owner={selectedOption.owner}
            />
        <div className="newCard">
            {isCardShown ? (
             <NewCardForm 
             message={message1}
             onToggleVisible={handleCardShown}
            />
            ) : (
              ""
            )}     
                          
        </div>
      

             <Card likeCount={selectedOptionData.likeCount}
             card1={selectedOptionData.card1}
             card2={selectedOptionData.card2}
             card3={selectedOptionData.card3}
             card4={selectedOptionData.card4}
             card5={selectedOptionData.card5}
             message1={selectedOptionData.message1}
             message2={selectedOptionData.message2} 
            
             /> 
             
    
             
        </div>
        <div className ="boards_2" >
            <div className= "create_new_board">
              <p>Create New Board</p>
            
              
              <button
              id ="add_board_btn"
              onClick={() => setSelectedOption(boards[3].id)}     
              >
                Add Board 
              </button>
            </div>

            <div className="form_container">
              <form  onSubmit={onFormSubmit} id = "new_form" >
                <div className="field">
                  <label>Add Board Title: {newTitle} </label>
                  <input type="text" placeholder="Title" 
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label>Add Board Owner: {newOwner} </label>
                  <input type="text" placeholder="Owner" 
                   value={newOwner}
                     onChange={(e) => setNewOwner(e.target.value)}
                  />    
                </div>
                <div id = "submit">
                  <input  id = "submit_btn" type="submit" placeholder="Submit" />
                  
                </div>
                
              </form>
            </div>
        
            
            <div className= "create_new_card">
                <h4 id="create">Create New Card</h4>
                
                <textarea id="text_area" rows="2" placeholder='Message'
                value={message1}
                onChange={(e) => setMessage1(e.target.value)}
                
                ></textarea>
                {/* <button 
                onClick={handleCardShown}
                >Add Card</button> */}

                <div className="card_17">
                {message1}
                </div>
                <div className="cards_icons"> 
                 <p     
                 onClick={incrementCount}
                  >            
                  💙  
                  </p>
            <p>{count}</p>
              
          </div>   
              
               </div>
          </div>
        </main>

      </div>
      

  );
}

export default App;
