import React from "react";
import { useCart } from "react-use-cart";
import Food1 from '../../image/3menu5.png'
import Food2 from '../../image/3menu8.png'
import Food3 from '../../image/3menu1.png'
import Food4 from '../../image/3menu6.png'
import Food5 from '../../image/3menu7.png'
import Food6 from '../../image/3menu3.png';

import Food7 from '../../image/4menu1.png';
import Food8 from '../../image/4menu10.png';
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
                      {/* {item.img === "Dose" && (
                        <img src={Dose} style={{ height: "6rem" }} />
                      )} */}
                      {item.img === "3menu5.png" && (
          <img src={Food1} style={{ height: "6rem" }} />
        )}
        {item.img === "3menu8.png" && (
          <img src={Food2} style={{ height: "6rem" }} />
        )}
        {item.img === "3menu1.png" && (
          <img src={Food3} style={{ height: "6rem" }} />
        )}
        {item.img === "3menu6.png" && (
          <img src={Food4} style={{ height: "6rem" }} />
        )}
        {item.img === "3menu7.png" && (
          <img src={Food5} style={{ height: "6rem" }} />
        )}
        {item.img === "3menu3.png" && (
          <img src={Food6} style={{ height: "6rem" }} />
        )}

        {item.img === "4menu1.png" && (
          <img src={Food7} style={{ height: "6rem" }} />
        )}
        {item.img === "4menu10.png" && (
          <img src={Food8} style={{ height: "6rem" }} />
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
          

      <button className="btn m-2" onClick={() => order(items)}>Select Table</button>
      <a className='btton'href="https://rzp.io/l/BKbtmnZom">Buy Foods</a>
        



          
          {/* <Router>
            <Switch>
              <Route exact path="/table" component={BookTable} />
            </Switch>
          </Router>
          <Nav.Link href="/table">BookTable</Nav.Link>
          <Link  variant="black" to="/table">BookTable</Link> */}
        </div>
      </div>
    </section>
  );
};

export default Cart1;
