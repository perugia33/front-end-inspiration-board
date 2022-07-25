import React, { useState } from "react";
// import PropTypes from "prop-types";
import "./Card.css";

function NewCardForm(props){

  const [count, setCount] = useState(0)
  const incrementCount = () => {
    setCount(count + 1);
   }
     
 
  return(

      
      <div className="wrapper">
              <div className="cards">
            <div className= "card16"> </div>
        
            <h5> {props.message1}</h5>
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

      )
    };
       

// const NewCardForm = ({ onCardFormSubmit, onToggleVisible }) => {
//   const [formData, setFormData] = useState(kDefaultFormState);
//   const [isFormValid, setFormValid] = useState(false);

//   const handleChange = (event) => {
//     const fieldName = event.target.name;
//     const fieldValue = event.target.value;

//     const newFormData = { ...formData, [fieldName]: fieldValue };

//     setFormData(newFormData);
//     setFormValid(fieldValue ? fieldValue.length <= 40 : false);
//   };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   onCardFormSubmit(formData);
  //   setFormData(kDefaultFormState);
  //   setFormValid(false);
  //   onToggleVisible();
  // };



// NewCardForm.propTypes = {
//   onCardFormSubmit: PropTypes.func.isRequired,
//   onToggleVisible: PropTypes.func.isRequired,
// };

export default NewCardForm;



// const Card = (props) => {
//   const [likeCount, setLikeCount] = useState(likeCount)
//   const updateCount = updatedCount =>{
//     let total = props.likeCount;
//     const onButtonClick = () => {
//         if (total > 0){
//           total += 1
//           console.log({total})
//           return total 
//         } else{
//           return none
//         }
//       }
//     }
 
//   }
