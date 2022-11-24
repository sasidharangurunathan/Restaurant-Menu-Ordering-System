import React from "react";
import { useCart } from "react-use-cart";
import dosa from "../../image/dosa.jpg";
import parotta from "../../image/parotta.png";
import IdliVada from "../../image/idli-vada.jpg";
import uttapam from "../../image/uttapam.png";
 import boori from "../../image/poori.png";
import { useDispatch } from "react-redux";
import { addItem, postItems } from "../../redux/cart/cartAction";
import { fetchCartSuccess } from "../../redux/cart/cartAction";
import { Link } from "react-router-dom";
import CartPage from "../CartPage";
import { changeUser } from "../../redux/users/userActions";
// import Dose from '../../../src/image/dosa.jpg'
// import Parotta from '../../../src/image/parotta.png'
// import IdliVada from '../../../src/image/idli-vada.jpg'
// import Uttapam from '../../../src/image/uttapam.png'

const heading = {
  text: "center",
  fontSize: "30px",
  color: "blue",
};


// const ItemCart = (props) => {
//   const { addItem } = useCart();
//   console.log("propswsss",props.item)
//   return (
//     <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
//       <div class="card p-0 overflow-hidden h-100 shadow">
//       {props.img === "dosa" && (
//           <img src={Dose} className="card-img-top img-fluid" />
//         )}
//         {props.img === "parotta" && (
//           <img src={Parotta} className="card-img-top img-fluid" />
//         )}
//         {props.img === "boori" && (
//           <img src={boori} className="card-img-top img-fluid" />
//         )}
//         {props.img === "idli_vada" && (
//           <img src={IdliVada} className="card-img-top img-fluid" />
//         )}
//         {props.img === "uttapam" && (
//           <img src={Uttapam} className="card-img-top img-fluid" />
//         )}
        
//         <div class="card-body text-center">
//           <h5 class="card-title">{props.title}</h5>
//           <p class="card-text">₹ {props.price}</p>
//           <button class="btn btn-success" onClick={() => addItem(props.item)}>
        
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

function ItemCart(props) {
  const { display,id,menu_name, price, menu_quantity, img } = props;

  const dispatch = useDispatch();

  console.log("propssss", props);
  return (
    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
      <div className="card p-0 overflow-hidden h-100 shadow">
        {/* <img src={dosa}  className="card-img-top img-fluid" /> */}
        {props.img === "dosa" && (
          <img src={dosa} className="card-img-top img-fluid" />
        )}
        {props.img === "parotta" && (
          <img src={parotta} className="card-img-top img-fluid" />
        )}
        {props.img === "idli_vada" && (
          <img src={IdliVada} className="card-img-top img-fluid" />
        )}
        {props.img === "uttapam" && (
          <img src={uttapam} className="card-img-top img-fluid" />
        )}
        {props.img === "boori" && (
          <img src={boori} className="card-img-top img-fluid" />
        )}
        
        
        <div className="card-body text-center">
          <h5 className="card-title">{menu_name}</h5>
          {/* <input type="number" className="text-center" value={menu_quantity} /> */}

          <h5 className="card-title">{img}</h5>
          {props.discount != "" && (
          <p class="card-text">discount {props.discount}%</p>
        )}
          <p className="card-text">₹ {price}</p>
         
          <p className="card-text">{display}</p>
          
          {/* <input
            type="number"
            min="0"
            className="text-center"
            onChange={(val) =>
              dispatch(changeUser({ menu_quantity: val.target.value,uid:id }))
             
            }
            
          /><br/><br/> */}
          <button class="btn btn-success" >
        
                     Add to Cart
                   </button>

{/* {props.menu_quantity >= "1" && (
  <button
            className="btn btn-success"
            onClick={() => dispatch(fetchCartSuccess(props))}
          >
            Add to Cart
          </button>
        )} */}
          


        </div>
      </div>
    </div>
  );
}

export default ItemCart;
