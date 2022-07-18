import React from 'react';
import ReactDOM from 'react-dom/client';
import Cards from '../components/Cards';
import './CardList.css';
import Grid from  '@material-ui/core/Grid';
import Paper from  '@material-ui/core/Paper';
import {Container} from '@material-ui/core';


const CardList = (props)=> {

  const cardDataMap = props.messages.map(item =>(
    <Cards
        key={item.id}
        id={item.id} 
        image={item.image} 
        text={item.text} 
        liked={item.liked} 
        onUpdateCard={props.onUpdateCard}/> ))
  console.log("hello" + {cardDataMap})

    return(

        <Container >
     
           <Grid container spacing={2}>
           {cardDataMap} 
            <Grid item  key={cardDataMap.id} xs={4} >
                 
                  <Cards/>
               
            </Grid>
                
               
                
            </Grid>

        </Container>
    )

}

export default CardList;