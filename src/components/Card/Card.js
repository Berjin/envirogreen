import React from 'react';
import flower from './Assets/flower.jpeg';
import './Card.css';
import {Button} from '../Button/Button';
const Card = (props)=>{
    const {id,title,description,price,addFunc} = props;
    return(
        <div  className='card'>
            <img src={flower} alt='Jasmine'/>
            <div>
                <h2>{title}</h2>
                <p>{description}</p>
                <p className='amount'>Price: ₹{price}</p>
            </div>
            <Button onClick={()=>addFunc({id,title,description,price,units:1})}>Add to Cart</Button>
        </div>
    )
}
export default Card;