import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { connect } from "react-redux";
import { deletecart } from "../redux/cart/cartAction";
//import MaterialTable, { Column } from "@material-table/core";
// import { ThemeProvider, createTheme } from '@mui/material';

import {
  cartPages,
  fetchCartSuccess,
  cartPage,
} from "../redux/cart/cartAction";
import Button1 from 'react-bootstrap/Button';
import { TextField, Button } from "@mui/material";
import { getdata, order1 } from "../redux/cart/cartAction";
import DeleteIcon from "../../src/image/delete.png";
import { useSelector } from "react-redux";


// export default function CartPage() {
//   const userReducersData = useSelector(state => state.cart)






//   return (
//     <MaterialTable
//       title="Positioning Actions Column Preview"
//       columns={[
//         { title: '#', field: 'num' },
//         { title: 'menuName', field: 'menuname' },
//         { title: 'menuPrice', field: 'menuPrice'},
//         {
//           title: 'menuQuantity',
//           field: 'menuQuantity',
//           // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
//         },
//         {
//           title: 'netPrice',
//           field: 'netPrice',
//           // lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
//         },
//       ]}
//       data = {[{menuname:'name',
//       menuPrice:'89'
//       }]}
//       // data={userReducersData.map((item, index) =>({
//       //   menuname:item.menu_name,
//       //   menuPrice:item.menu_price,
//       //   menuQuantity:item.menu_quantity,
//       //   netPrice:parseInt(item.menu_price) * parseInt(item.menu_quantity)
//       // }))
//       // }
//       actions={[
//         rowData => ({
//           icon: 'delete',
//           tooltip: 'Delete User',
//           // onClick: (event, rowData) => ,
//           disabled: rowData.birthYear < 2000
//         })
//       ]}
//       options={{
//         actionsColumnIndex: -1
//       }}
//     />
//   )
// }


class CartPage extends Component {
 
  constructor(props) {
    super(props);
    this.state = {
      first: "sasi",
    };
  }

  componentDidMount = () => {
    this.props.cartPages();
    this.props.getdata();
  };
 
   handleClick = (val,id)=>{
    console.log('moving',val)


    let menu1;
    
    const menu = menu1;
    let check1 = this.props.addCartValue.filter((val) => val.id == id);
     
      let temp;
     
      if (check1.length > 0) {
        temp = this.props.addCartValue.map((value) => {
         
          if (value.id === id) {
            console.log("valueSingle",value)
            this.props.deletecart(value.id);
            
          }
          return val;
          

        });
        
      } 
    // let check=this.props.addCartValue.filter((val) => val.id == id)

    
    
    // const data = menu.menuList;
    // console.log('data',data)

  }
  

  render() {
    // const userReducersData = useSelector(state => state.cart)
    console.log("CartReducersdata", this.props);
    // console.log("this is the card Page")
    let total=0;
    return (
      <div className="container">
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          onChange={(value) => {
            this.props.cartPage({
              props: "items",
              value: value.target.value,
              error: "itemError",
            });
          }}
        />
        <Button variant="outlined">Outlined</Button>
        <br/>
        
        <br></br>

        <Row>
              <Col sm={9}>
              <h1>Order Details</h1>

              <table class="table">

          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">menuName</th>
              <th scope="col">menuPrice</th>
              <th scope="col">menuQuantity</th>
              <th scope="col">netPrice</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
          
         
          {this.props.addCartValue.map((item, index) => 
          {
             console.log("sadsdfghjsa",this.props.addCartValue);
            total=total+(parseInt(item.menu_price) * parseInt(item.menu_quantity))
              return (

                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{item.menu_name}</td>
                  <td>{item.menu_price}</td>

                  <td>{item.menu_quantity}</td>
                  <td>
                    {parseInt(item.menu_price) * parseInt(item.menu_quantity)}
                  </td>
                  <button
                    onClick={() => this.handleClick(this.props.addCartValue, item.id)}

                  >

                    <td>
                      <img src={DeleteIcon}></img>
                    </td>
                  </button>
                </tr>

              );
            })}<tr>
            <td>Total:</td>
            <td></td>
            <td></td>
            <td></td>
            <td>{total}</td>
            <td></td>
          </tr>
          </tbody>
          
          
        </table>
        
                
              </Col>
              <Col sm={3}>

              <div className="float-right">
              <h1>Order ID</h1>
                
                <label>Tableid</label><br/>
                <input type="text" /><br/>
                <label>Name</label><br/>
                <input type="text" /><br/>
                <label>MobileNumber</label><br/>
                <input type="text" />
                <h5>Total = {total}</h5>
                
                
                
                <Button1 className="" variant="primary"
                onClick={() => order1(this.props.addCartValue)}
                >OrderNow</Button1>
               
              </div>


              </Col>
            </Row>
            <br/>
        
        
        
        

      </div>
    );
  }
}



const mapToStateProps = (state) => {
  const {
    first,
    items,
    itemsError,
    users,
    cart,
    cartPage,
    error,
    menuListApi,
    addCartValue,
  } = state.cartReducers;

  return {
    first,
    items,
    itemsError,
    users,
    cart,
    cartPage,
    error,
    menuListApi,
    addCartValue,
  };
};

const mapDispatchToProps = {
  cartPages: cartPages,
  cartPage: cartPage,
  fetchCartSuccess: fetchCartSuccess,
  getdata: getdata,
  deletecart:deletecart,
  order1:order1
};
export default connect(mapToStateProps, mapDispatchToProps)(CartPage);
