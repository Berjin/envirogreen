import React from 'react';
import Card from '../Card/Card';
import './PlantList.css'
const PlantList = ({plants,addFunc})=>{
    const cardComponent = plants.map((flower,idx)=>{
        return <Card key={plants[idx].id} id={plants[idx].id} title={plants[idx].title} description={plants[idx].description} price={plants[idx].price} addFunc={addFunc}/>;
    })
    return(
        <div id='plant'>
        <div className='plants'>
        <h2>Plants</h2>
        <hr/>
        </div>
        <div className="grid-wrapper">
        {cardComponent}
        </div>
        </div>
    );
}

export default PlantList;