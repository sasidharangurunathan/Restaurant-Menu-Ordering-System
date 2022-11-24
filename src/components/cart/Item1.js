import React from "react";
import { useCart } from "react-use-cart";
import Food1 from '../../../src/image/3menu5.png'
import Food2 from '../../../src/image/3menu8.png'
import Food3 from '../../../src/image/3menu1.png'
import Food4 from '../../../src/image/3menu6.png'
import Food5 from '../../../src/image/3menu7.png'
import Food6 from '../../../src/image/3menu3.png';

import Food7 from '../../../src/image/4menu1.png';
import Food8 from '../../../src/image/4menu10.png';
import { useDispatch } from "react-redux";


  

const Item1=(props)=>{
  const { addItem } = useCart();
  console.log("propswsss",props.item)
  const dispatch = useDispatch();

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
      {props.img === "3menu5.png" && (
          <img src={Food1} className="card-img-top img-fluid" />
        )}
        {props.img === "3menu8.png" && (
          <img src={Food2} className="card-img-top img-fluid" />
        )}
        {props.img === "3menu1.png" && (
          <img src={Food3} className="card-img-top img-fluid" />
        )}
        {props.img === "3menu6.png" && (
          <img src={Food4} className="card-img-top img-fluid" />
        )}
        {props.img === "3menu7.png" && (
          <img src={Food5} className="card-img-top img-fluid" />
        )}
        {props.img === "3menu3.png" && (
          <img src={Food6} className="card-img-top img-fluid" />
        )}

        {props.img === "4menu1.png" && (
          <img src={Food7} className="card-img-top img-fluid" />
        )}
        {props.img === "4menu10.png" && (
          <img src={Food8} className="card-img-top img-fluid" />
        )}
        
        <div class="card-body text-center">
          <h5 class="card-title">{props.title}</h5>
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
export default Item1;
