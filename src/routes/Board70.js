import React from 'react'
import {Link} from "react-router-dom";
import image from '../images/nostalgiaLogo .png'
import "../App.css";

const Board70 = () => {
    return (
    
        <div className="container">
            <header>
                <div id="header">
                    <img src={image} alt = "logo" id ="logo"  height={55} width= {5}/>
                    <h3>Nostalgia</h3>
                    <div className="dropdown">
                        

                        <nav className="navigation">
                        <h6> <Link to= "/">Home</Link>  
                        </h6> 
                        
                        </nav>
                        
                    </div>  
                </div>
            
            </header>
        <h3 id="nostalgia">Nostalgic Images</h3>
    <div class="wrapper">
      <div class="cards">
        <div class="card_2"> 
          {/* <img src={image} alt="love poster" /> */}
          
       
     </div>
          
        </div>

        <div class="cards">
          <div class="card_5"> </div>
          {/* <img src={image} alt="love poster" /> */}
           
          {/* <div class ="cardActions_Container">
           
          

       </div> */}
          
        </div>

        <div class="cards"> 
          <div class="card_3"></div>
          {/* <img src={image} alt="love poster" /> */}
        
          {/* <div class ="cardActions_Container">
           
            <div><i class="fa-solid fa-trash"></i></div>
            
          </div> */}
          
        </div>

        <div class="cards"> 
           <div class="card_6"></div>
          {/* <img src={image} alt="love poster" /> */}
        
        </div>

   
    
        
          
        
        
       
    </div>

        </div>

)
};



export default Board70;