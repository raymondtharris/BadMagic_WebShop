import React, {Component} from 'react';

import './Checkout.css';

class Checkout extends Component {
  constructor(){
    super()
    this.state = {
      cart:[]
    }
  }
  componentDidMount() {
    
  }
  
  render(){
    return (
      <div className="App">
        <header className="">
          <div>Bad Magic</div>
          <div></div>
        </header>
        {this.state.shopItems}

  
      </div>
    );
  }
}

export default Checkout