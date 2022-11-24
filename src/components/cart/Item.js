import React from "react";
import { useCart } from "react-use-cart";
import Dose from '../../../src/image/dosa.jpg'
import Parotta from '../../../src/image/parotta.png'
import IdliVada from '../../../src/image/idli-vada.jpg'
import Uttapam from '../../../src/image/uttapam.png'

const Item = (props) => {
  const { addItem } = useCart();
  console.log("propswsss",props.item)
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div class="card p-0 overflow-hidden h-100 shadow">
      {props.img === "Dose" && (
          <img src={Dose} className="card-img-top img-fluid" />
        )}
        {props.img === "Parotta" && (
          <img src={Parotta} className="card-img-top img-fluid" />
        )}
        {props.img === "IdliVada" && (
          <img src={IdliVada} className="card-img-top img-fluid" />
        )}
        {props.img === "Uttapam" && (
          <img src={Uttapam} className="card-img-top img-fluid" />
        )}
        
        <div class="card-body text-center">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">₹ {props.price}</p>
          <button class="btn btn-success" onClick={() => addItem(props.item)}>
        
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};
export default Item;
