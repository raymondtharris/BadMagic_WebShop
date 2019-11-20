import React, {Component} from 'react';
import Cart from './../cart/cart';
import './BMHeader.css';


class BMHeader extends Component {
  constructor(){
    super()
    this.state = {
      
    }
  }
  componentDidMount() {
    
  }
  
  render(){
    return (
      <div className="BM-Header">
        <div className="BM-Menu">Menu</div>
        <div>Bad Magic</div>
        <Cart/>
      </div>
    );
  }
}

export default BMHeader
