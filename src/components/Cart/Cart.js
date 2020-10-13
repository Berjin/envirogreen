import React from 'react';
import {Button} from '../Button/Button';

const Cart = (props)=>{
    const {cart} = props;
    const totalPrice = ()=> {
        var sum=0;
        cart.map(c=> sum=sum+(c.price*c.units));
        return sum;
    }
    const handleCheckout = ()=>{
        alert(`Thankyou for purchasing :)\nThe amount payable is ₹ ${totalPrice()}`);
        

    }
    return(
        <div  className='card'>
            <h2>Cart</h2>
            {
                cart.length <=0? <p>The Cart is currently empty</p>: 
                <div>
                <ul>
                <li style={{fontWeight:'bold',listStyleType:'none'}}>Item | Quantity | Price</li>
                <hr style={{width:"90%"}}/>
                {cart.map(c => <li style={{listStyleType:'none'}}>{c.title} | Quantity: {c.units} | Price: {c.price*c.units}</li>)}
            </ul>
            <p className='amount'>Total Price: ₹ {totalPrice()}</p>
            <Button onClick={()=>handleCheckout()}>Check out</Button>
            </div>
            }
            
        </div>
    )
}
export default Cart;