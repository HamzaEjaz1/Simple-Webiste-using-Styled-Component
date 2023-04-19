import React from 'react'
import { StyledCard } from './Components/Styles/Card.styled';

const Card = (props) => {
  return (
    <>
<StyledCard>
    

        <div className='CardContent'>
          <h2>{props.title}</h2>
          <p>{props.body}</p>
        </div>
        <div className='CardImage'>
          <img src={`./images/${props.image}`}/>  
        </div>



      </StyledCard>
    </>
  )
}

export default Card;
// { item: { id, title, body, image } }