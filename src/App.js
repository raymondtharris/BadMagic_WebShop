import React, {Component} from 'react';
import Item from './components/Item';
import Cart from './components/cart/cart';
import './App.css';
import BMHeader from './components/header/header';

class App extends Component {
  constructor(){
    super()
    this.state = {
      shopItems: [],
      cart:[]
    }
  }
  componentDidMount() {
    fetch("https://0b9n4totj4.execute-api.us-east-1.amazonaws.com/Devstage0_1/all-items",
    {headers : {'Access-Control-Allow-Origin' :'*'}})
    .then(response => response.json())
    .then(data => {
      console.log(data)
      this.setState({
        shopItems : data.map((item,index) => <Item key={index} shopitem={item}/>)
      })
      console.log(this.state.shopItems)
    })
  }
  
  render(){
    return (
      <div className="App">
        <BMHeader />
        {this.state.shopItems}

  
      </div>
    );
  }
}

export default App
