import React, {Component} from 'react';
import './item-gallery.css';
const bucketURL = "https://badmagic-shopitems.s3.amazonaws.com/"

class ItemGallery extends Component{
    constructor(props) {
        super(props)
        this.state = {
          flipped:false
        }
      }
      handleFlip(newFlip){
          console.log("flip")
          //this.state.flipped = newFlip
      }
      render(){
        return (
            <div className="galleryContainer" >
               <img  height="400px" width="400px" className={this.state.flipped? "hideImg":"showImg"} src={imageURL(this.props.options)}/>
            </div>
          );
      }

      
  
}

function addItemToCart(){
  console.log("Adding to Cart")
}

function imageURL(options){
    return bucketURL+options+"/"+options+"-1.jpg"
}
function imageURLFlip(options){
    return bucketURL+options+"/"+options+"-2.jpg"
}
export default ItemGallery;

// <img className={!this.state.flipped? "showImg":"hideImg"} src={imageURLFlip(this.props.options)}/>