import React from 'react';
import Card from '../Card/Card';
import './FlowerList.css'
const FlowerList = ({flowers,addFunc})=>{
    const cardComponent = flowers.map((flower,idx)=>{
        return <Card key={flowers[idx].id} id={flowers[idx].id} img={flowers[idx].img} title={flowers[idx].title} description={flowers[idx].description} price={flowers[idx].price} addFunc={addFunc}/>;
    })
    return(
        
        <div id='flower'>
        <div className='flowers'>
        <h2>Flowers</h2>
        <hr/>
        </div>
        {flowers.length?
        <div className="grid-wrap">
            {cardComponent}
        </div>:
        <h2 style={{textAlign:'center'}}>No flowers found!</h2>
        }
        </div>
    );
}

export default FlowerList;