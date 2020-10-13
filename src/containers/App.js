import React,{Component} from 'react';
import Navbar from '../components/Navbar/Navbar';
import './App.css';
import SearchBox from '../components/SearchBox/SearchBox'
import {flowers} from '../components/FlowerList/Flowerdetails' ;
import {plants} from '../components/PlantList/Plantdetails' ;


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
  render(){
      return (
        <div className="App">
            <Navbar/>
            <div className="container">
              <h1>Flowers are beautiful</h1>
            </div>
            <SearchBox searchChange={this.onSearchChange}/>
        </div>
      );
  }
}

export default App;
