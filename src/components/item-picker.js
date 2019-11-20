import React from 'react';

function ItemPicker(props) {
  return (
    <div className="">
       <form>
       <select name="sizeSelect">
           <option value="Small">Small</option>
           <option value="Medium">Medium</option>
           <option value="Large">Large</option>
           <option value="X-Large">X-Large</option>
           <option value="XX-Large">XX-Large</option>
           <option value="XXX-Large">XXX-Large</option>
       </select>
       <button onClick={addItemToCart}>Add to Cart</button>
       </form>
    </div>
  );
}

function addItemToCart(){
  console.log("Adding to Cart")
}

export default ItemPicker;