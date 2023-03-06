import React, { Component } from "react";
import ItemCart from './OrderItem';
import { Button, Table } from "react-bootstrap";
import image from "../../image/orderpage.jpg";
import { useDispatch } from "react-redux";
//import {Routes, Route, useNavigate} from 'react-router-dom';

export class OrderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: null,
      list1: null
    };
  }


  componentDidMount() {
    let arr = JSON.parse(localStorage.getItem("login"));
    //console.log(JSON.stringify({ userDetails: arr }));
//     Promise.all([
//   fetch(url1),
//   fetch(url2),
//   fetch(url3)
// ])
Promise.all([
     

    fetch("http://localhost:8081/ordersAll").then((response) => {
        response.json().then((result) => {
          // console.warn(result)
          this.setState({ list: result });
        });
      }),
    fetch("http://localhost:8081/order_detailsAll").then((res) => {
        res.json().then((result) => {
          // console.warn(result)
          this.setState({ list1: result });
        });
      })
    ])
    .then(console.log)
      
  }
  food(props){
    console.log("propswsss",props) 
   
    fetch('http://localhost:8081/FoodMenu', {
      method: "Post",
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(props)
    }).then((result)=>{
      result.json().then((res)=>{
        alert("Food Prefered")
        window.location.reload(false)
      })
    })
  }
  
  

  render() {
    
    console.log("state", this.state);
    
   
    return (
        <div style={{ backgroundImage:{image} ,width: "100%" }}  className="App">
        
        <div className="container">
        
          <br />
          <br />
          {this.state.list ? (  <div>
          <h1>Order Details</h1>

              <table class="table">

          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">PersonName</th>
              <th scope="col">Mobile</th>
              <th scope="col">Orders</th>
              <th scope="col">Order Status</th>
              
              {/* <th scope="col">Action</th> */}
            </tr>
          </thead>
          <tbody>
          
         
          {this.state.list.map((item, index) => 
          {
             console.log("sadsdfghjsa",this.state.list);
            
              return (

                <tr>
                  
                  <td>{item.order_id}</td>
                  <td>{item.person_name}</td>

                  <td>{item.mobile}</td>
                  <td>
                  <tr>
                  <th scope="col">MenuName</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
                  </tr>
                  {
                this.state.list1.map((item1, i) => 
            
              item.order_id==item1.order_id  && (
         
              
              <tr>
                
                <td>{item1.menu_name}</td>
                <td>{item1.menu_quantity}</td>
                <td>{item1.menu_price}</td>
                
               
                
                
              </tr>
                )
           
            )}
                  </td>
                  
                    <td>{item.order_status}</td>
                    <td>
                    {/* {item.order_status=='packed'?<Button  >Delivered</Button>: <button onClick={()=>this.food({data:item.order_id})}  className="btn btn-danger" > Order</button>} */}
                    {/* <Button  >Order</Button> */}
                    {/* <button className="btn btn-success" onClick={()=>this.food({data:item.order_id})} >BookTable</button> */}

                   
                    </td>
                  
                </tr>

              );
            })}
          </tbody>
          
          
        </table>
        </div>
        ) : (
          <p>Please Wait</p>
        )}
        
              </div>
              </div>
    );
  }
}

export default OrderContainer;
