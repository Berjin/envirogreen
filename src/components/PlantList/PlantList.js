import React from 'react';
import Card from '../Card/Card';
import './PlantList.css'

const PlantList = ({plants,addFunc})=>{
    const cardComponent = plants.map((plant,idx)=>{
        return <Card key={plants[idx].id} id={plants[idx].id} img={plants[idx].img} title={plants[idx].title} description={plants[idx].description} price={plants[idx].price} addFunc={addFunc}/>;
    })
    return(
        <div id='plant'>
        <div className='plants'>
        <h2>Plants</h2>
        <hr/>
        </div>
        {plants.length?
        <div className="grid-wrap">
            {cardComponent}
        </div>:
        <h2 style={{textAlign:'center'}}>No plants found!</h2>
        }
        </div>
    );
}

export default PlantList;