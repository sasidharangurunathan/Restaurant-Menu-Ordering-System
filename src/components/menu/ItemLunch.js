import React from "react";
import { useCart } from "react-use-cart";


import Food7 from '../../../src/image/4menu1.png';
import Food8 from '../../../src/image/4menu10.png';
import Food9 from '../../../src/image/4menu9.png';
import Food10 from '../../../src/image/4menu15.png';
import Food11 from '../../../src/image/4menu14.png';
import Food12 from '../../../src/image/4menu6.png';


import { useDispatch } from "react-redux";


  

const ItemLunch=(props)=>{
  const { addItem } = useCart();
  console.log("propswsss",props.item)
  

  function AddTable1(prop){
    console.log("addtable",prop)
   alert("Table Selected")
   addItem(prop)
  
  //  localStorage.setItem('table',props)
   window.location.reload(false)

  }
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div class="card p-0 overflow-hidden h-100 shadow">
        {/* Lunch */}
        {props.img === "4menu1.png" && (
          <img src={Food7} className="card-img-top img-fluid" />
        )}
        {props.img === "4menu10.png" && (
          <img src={Food8} className="card-img-top img-fluid" />
        )}
        {props.img === "4menu9.png" && (
          <img src={Food9} className="card-img-top img-fluid" />
        )}
        {props.img === "4menu15.png" && (
          <img src={Food10} className="card-img-top img-fluid" />
        )}
        {props.img === "4menu14.png" && (
          <img src={Food11} className="card-img-top img-fluid" />
        )}
        {props.img === "4menu6.png" && (
          <img src={Food12} className="card-img-top img-fluid" />
        )}
        <p>Discount{props.Discount}</p>
        <div class="card-body text-center">
          <h5 class="card-title">{props.title}</h5>
          <p>{props.img}</p>
          <p class="card-text"  style={{color:"red"
      }} >SAR {props.price}</p>
         <button class="btn btn-success" onClick={() =>AddTable1(props.item) }>
        
        Add to Cart
      </button>
        </div>
      </div>
    </div>
  );
};
export default ItemLunch;
