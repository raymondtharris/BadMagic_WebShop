import React from 'react';
import ItemPicker from './item-picker'
import ItemGallery from './item-gallery/item-gallery'

function Item(props) {
  console.log(props)
  return (
    <div className="">
       <ItemGallery options={props.shopitem.ShopID}/>
       <div>{props.shopitem.Name}</div>
       <div>{formatPrice(props.shopitem.Price)}</div>
       <ItemPicker/>
    </div>
  );
}

function formatPrice(price){
  return "$"+price*.01;
}

export default Item;