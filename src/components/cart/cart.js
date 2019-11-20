import React, {Component} from 'react';

class Cart extends Component {
  constructor(){
    super()
    this.state = {
      itemCount:0
    }
  }
  componentDidMount() {
    
  }
  
  render(){
    return (
      <div className="App">
          <div>{this.state.itemCount}</div>
      </div>
    );
  }
}

export default Cart