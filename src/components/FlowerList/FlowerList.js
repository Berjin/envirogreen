import React from 'react';
import Card from '../Card/Card';
import './FlowerList.css'
const FlowerList = ({flowers,addFunc})=>{
    const cardComponent = flowers.map((flower,idx)=>{
        return <Card key={flowers[idx].id} id={flowers[idx].id} title={flowers[idx].title} description={flowers[idx].description} price={flowers[idx].price} addFunc={addFunc}/>;
    })
    return(
        <div id='flower'>
        <div className='flowers'>
        <h2>Flowers</h2>
        <hr/>
        </div>
        <div className="grid-wrap">
        {cardComponent}
        </div>
        </div>
    );
}

export default FlowerList;