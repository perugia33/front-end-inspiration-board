import React from 'react';
import './Card.css';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions'
import Icon from '@material-ui/core/Icon';
import {IconButton} from  '@material-ui/core';
import {DeleteOutlined} from  '@material-ui/icons';
import FavoriteIcon from '@material-ui/icons/Favorite';



const Cards = ()=> {

    return(

        <div className = "card">
            <Card>
                {/* <CardHeader 
                action={
                    <IconButton>
                        <DeleteOutlined />
                    </IconButton>
                }
                /> */}
                <CardMedia
                    component="img"
                    height="104"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu9qa2FKzekjelSQz910jeTLoXAbZj6Fat1g&usqp=CAU"
                />

                <CardContent>
                        <Typography variant="body2" color="text.secondary">
                        Do What Makes You Happy

                        </Typography>
                </CardContent>

                <CardActions Spacing={1}>
                    
                    <Typography variant="body2" color="text.secondary">2</Typography>
                    <icon> 💜</icon>
                    
                    <Icon color="primary"  onClick= {()=> console.log("deleted")}>
                        add_circle
                    </Icon>
                    <IconButton onClick= {()=> console.log("deleted")}>
                        <DeleteOutlined />
                    </IconButton>
                   
                   
                </CardActions>
                        
                
            </Card>
        
            

         
            {/* <div  id = "card_1">1
               
            </div> */}
            {/* <div  id = "card_2"> */}
            {/* <i class="fa-solid fa-trash-can"></i> */}
               
                {/* <h4> count</h4>
                <icon> 💜</icon>
                <button className = "card_btn">+1</button>
            </div> */}
            {/* <div  id = "card_1">3</div> */}

            
            
    
         
      
        </div>
    )

}





export default Cards;