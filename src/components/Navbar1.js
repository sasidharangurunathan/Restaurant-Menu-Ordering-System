import React, { Component } from "react";
import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";
import NavDropdown from 'react-bootstrap/NavDropdown';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/store";
import useNavigate from "react-router-dom";

import Product from "./ProductContainer";

import Menu from "./UserContainer";
import Cart from "./cart/Cart";
import Cart1 from "./cart/Cart1";
import CartPage from "./CartPage";
import BookTable from "./BookTable";
import Home from "./Home";
import Login from "./Login";
import Logout from "./Logout";
import Log from "./Log";
import Form1 from "./Form";
import Form2 from "./FormValid";
import Form3 from "./ModelAlert";
import Admin1 from "./DashBoard/List";
import AdminFood from "./DashBoard/AddFood";
import { CartProvider } from 'react-use-cart';
import MyOrder from "./MyOrder";
import TableContainerData from "./table/TableContainerData";
import OrderContainer from "./order/OrderContainer";
import MenuContainer from "./MenuContainer";
import LunchContainer from "./menu/LunchContainer";

export class Navbar1 extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar bg="light" expand="lg" fixed="top">
            <Container fluid>
              <Navbar.Brand href="#">Restaurant Menu</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/menu">Menu</Nav.Link>
                <Nav.Link href="/product">Product</Nav.Link>
                <Navbar.Toggle aria-controls="navbar-dark-example" />
        
            <NavDropdown
              id="nav-dropdown-dark-example"
              title="Menu"
              menuVariant="dark"
            >
              <NavDropdown.Item href="/menu1">Break Fast</NavDropdown.Item>
              <NavDropdown.Item href="/lunch">
                Lunch
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dinner</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          
                {/* <Nav.Link href="/myorder">MyOrder</Nav.Link> */}
                <Nav.Link href="/ordercon">MyOrder</Nav.Link>
                <Nav.Link href="/table">BookTable</Nav.Link>
                <Nav.Link href="/cart1"><BsFillCartPlusFill /></Nav.Link>
                {/* <Nav.Link href="/cart">
                  cart
                </Nav.Link> */}
                {/* <Nav.Link href="/login">login</Nav.Link> */}
                {
                  localStorage.getItem('login') ? 
                <Nav.Link href="/logout">logout</Nav.Link>
                :
                <Nav.Link href="/sigin">login</Nav.Link>

                }
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                
              </Nav>
            </Container>
          </Navbar>
          <div>
            <Switch>
            <Route path="/lunch">
                <LunchContainer />
              </Route>
            <Route path="/ordercon">
                <OrderContainer />
              </Route>
            <Route path="/tablecon">
                <TableContainerData />
              </Route>
            <Route path="/food">
                <AdminFood />
              </Route>
            <Route path="/admin1">
                <Admin1 />
              </Route>
            <Route path="/modal">
                <Form3 />
              </Route>
            <Route path="/formvalid">
                <Form2 />
              </Route>
            <Route path="/form">
                <Form1 />
              </Route>



            <Route path="/logout">
                <Logout />
              </Route>
            <Route path="/sigin">
                <Log />
              </Route>
            <Route path="/cart1">
            <CartProvider><Cart1 /></CartProvider>
                
              </Route>
            <Route path="/login">
                <Login />
              </Route>
              <Route path="/cart" component={CartPage} />
               {/* <Route path="/cart">
                <CartPage /> 
              </Route>  */}
              <Route path="/menu1">
              <CartProvider><MenuContainer/></CartProvider>
              </Route>
              <Route path="/table">
              <CartProvider><BookTable /></CartProvider>
              </Route>
              <Route path="/myorder">
              <CartProvider>
                <MyOrder />
              </CartProvider>
                
              </Route>
              <Route path="/product">
              <CartProvider>
                <Product />
              </CartProvider>
                
              </Route>

              <Route path="/menu">
                <div className="App">
                  <Menu />
                  {/* <Cart /> */}
                </div>
              </Route>

              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default Navbar1;
