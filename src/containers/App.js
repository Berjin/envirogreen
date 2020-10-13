import React,{Component} from 'react';
import Navbar from '../components/Navbar/Navbar';
import './App.css';
import SearchBox from '../components/SearchBox/SearchBox'
import {flowers} from '../components/FlowerList/Flowerdetails' ;
import {plants} from '../components/PlantList/Plantdetails' ;
import FlowerList from '../components/FlowerList/FlowerList';
import PlantList from '../components/PlantList/PlantList';


class App extends Component {
  constructor(){
    super()
    this.state = {
      plants:plants,
      flowers:flowers,
      searchfield:'',
      cart:[
          {
            id:3,
            title:'Sunflower',
            description:'Sunflower is a wonderful flower',
            price:'₹200',
            units:1
        },
      ]
    }
  }
  onSearchChange = (event)=>{
    this.setState({searchfield:event.target.value});
  }

  handleAddFunc(flower){
    const existingProduct = this.state.cart.filter(p=>p.id === flower.id);
    if(existingProduct.length>0){
      const withoutExistingProduct = this.state.cart.filter(p=>p.id !==flower.id);
      const updatedUnitsProduct = {
        ...existingProduct[0],
        units:existingProduct[0].units + flower.units
      }
        this.setState({
          cart:[...withoutExistingProduct,updatedUnitsProduct]
        })
    }
    else{
      this.setState({
        cart:[...this.state.cart,flower]
      })
    }
   
  }

  render(){
    const filteredplants = this.state.plants.filter(plant=>{
        return plant.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
    const filteredflowers = this.state.flowers.filter(flower=>{
        return flower.title.toLowerCase().includes(this.state.searchfield.toLowerCase());
    });
      return (
        <div className="App">
            <Navbar/>
            <div className="container">
              <h1>Flowers are beautiful</h1>
            </div>

            <SearchBox searchChange={this.onSearchChange}/>
            <FlowerList flowers={filteredflowers} addFunc={this.handleAddFunc.bind(this)}/>
            <PlantList plants={filteredplants}addFunc={this.handleAddFunc.bind(this)}/>
        </div>
      );
  }
}

export default App;
