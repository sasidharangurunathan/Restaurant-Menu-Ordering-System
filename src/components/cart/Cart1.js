import React from "react";
import { useCart } from "react-use-cart";
import Dose from "../../../src/image/dosa.jpg";
import Parotta from "../../../src/image/parotta.png";
import IdliVada from "../../../src/image/idli-vada.jpg";
import Uttapam from "../../../src/image/uttapam.png";
import BookTable from "../BookTable";
import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";

import {
  BrowserRouter as Router,
  
  Link,
  Switch,
  Route,
  
  
  Redirect
} from "react-router-dom";

function order(props) {
  console.log("data", props);
  let arr = props;
  
  

  fetch("http://localhost:8081/order", {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },

    //   body: arr
    body: JSON.stringify({
      productList: arr,
      userDetails:   JSON.parse(localStorage.getItem("login")),
    }),
  }).then((result) => {
    result.json().then((res) => {
      alert("Added food");
    });
  });
}
const Cart1 = () => {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  } = useCart();



  ////
 

  const addfood=()=> {
    
    window.parent.location = window.parent.location.href;
  }

  if (isEmpty) return <><br/><br/><br/> <h1 className="text-center">your cart is empty</h1></>;
  return (
    <section className="py-4 container">
      <div className="row justify-content-center">
        <div className="col-12">
          <h5>
            Cart1 ({totalUniqueItems})total Items: ({totalItems}){" "}
          </h5>

          <table className="table table-light table-hover m-0">
            <tbody>
              <tr>
                <th></th>
                <th>Menu Name</th>
                <th>Menu Price</th>
                <th>Quantity</th>
                <th>Update</th>
                <th></th>
              </tr>
              {items.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      {item.img === "Dose" && (
                        <img src={Dose} style={{ height: "6rem" }} />
                      )}
                      {item.img === "Parotta" && (
                        <img src={Parotta} style={{ height: "6rem" }} />
                      )}
                      {item.img === "IdliVada" && (
                        <img src={IdliVada} style={{ height: "6rem" }} />
                      )}
                      {item.img === "Uttapam" && (
                        <img src={Uttapam} style={{ height: "6rem" }} />
                      )}
                    </td>
                    <td>{item.title}</td>
                    <td>{parseInt(item.price) * parseInt(item.quantity)}</td>
                    <td>Quantity ({item.quantity})</td>
                    <td>
                      <button
                        className="btn btn-info m-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      <button
                        className="btn btn-info ms-2"
                        onClick={() =>
                          updateItemQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                      <button
                        className="btn btn-danger m-2"
                        onClick={() => removeItem(item.id)}
                      >
                        Remove Item
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <div className="col-auto ms-auto">
          <h2 style={{color:"red"}}>Total Price: SAR {cartTotal}  </h2>
        </div>
        <div className="col-auto">
          <button className="btn btn-danger ms-2" onClick={() => emptyCart()}>
            Clear Cart
          </button>
          {/* <button
            className="btn btn-primary m-2"
            onClick={() => order(items)}
          >
            Buy Now
          </button> */}
          

      <button className="btn m-2" onClick={() => order(items)+ emptyCart()}><a className='btton'href="https://rzp.io/l/BKbtmnZom">Buy Foods</a></button>
        



          
          <Router>
            <Switch>
              <Route exact path="/table" component={BookTable} />
            </Switch>
          </Router>
          <Nav.Link href="/table">BookTable</Nav.Link>
          <Link  variant="black" to="/table">BookTable</Link>
        </div>
      </div>
    </section>
  );
};

export default Cart1;
