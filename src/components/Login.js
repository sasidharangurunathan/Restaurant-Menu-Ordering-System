import React, { Component } from "react";
import { TextField } from "@mui/material";
import {
  
  Register,
  userInputChange,
} from "../redux/Customer/cusAction";
import { Navbar, Nav, Button, Form, Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  
  Link,
  Switch,
  Route,
  
  
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
const heading = {
  text: 'center',
  fontSize: '30px',
  color: 'red',
  fontFamily: 'Times New Roman'
}

class Login extends Component {
  

  componentDidMount = () => {
    // this.props.RegPage();
  };
 
  render() {
    return (
      <div className="App">
      <br />
        <br />
        <br/>
        <div>
          <div className="card w-50 mx-auto">
            <div className="card-header">
            <h1 style={heading}>Register</h1>
            </div>
            <div className="card-body">
            
            <TextField
          id="outlined-basic"
          label="FirstName"
          variant="outlined"
          value={this.props.first}
          onChange={(value) => {
            this.props.userInputChange({
              props: "first",
              value: value.target.value,
            });
          }}
        />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Lastname"
          variant="outlined"
          value={this.props.last}
          onChange={(value) => {
            this.props.userInputChange({
              props: "last",
              value: value.target.value,
            });
          }}
        />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Mobile"
          variant="outlined"
          value={this.props.mobile}
          onChange={(value) => {
            this.props.userInputChange({
              props: "mobile",
              value: value.target.value,
            });
          }}
        />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          value={this.props.email}
          onChange={(value) => {
            this.props.userInputChange({
              props: "email",
              value: value.target.value,
            });
          }}
        />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="PassWord"
          variant="outlined"
          type="password" 
          onChange={(value) => {
            this.props.userInputChange({
              props: "password",
              value: value.target.value,
            });
          }}
        />
        <br />
        <br />
        <TextField
          id="outlined-basic"
          label="Confirm PassWord"
          variant="outlined"
          type="password"
          onChange={(value) => {
            this.props.userInputChange({
              props: "password",
              value: value.target.value,
            });
          }}
          
        />
        
        <br />
        <br />
        { console.log("new",this.props.first,this.props.last,this.props.email,this.props.mobile,this.props.password)}
        <Button
          
         
          onClick={()=>this.props.Register(
            this.props.first,
            this.props.last,
            this.props.email,
            this.props.mobile,
            this.props.password
          )}
          
        >
          Register
        </Button>
        <p>Already had account
          <Nav.Link href="/sigin">Login</Nav.Link></p>
            </div>
            </div>
            </div>
        <br />
        <br />
        
        
      </div>
    );
  }
}

const mapToStateProps = (state) => {
  const { first, last, email, mobile, items, password, itemsError } = state.customerReducers;

  return {
    first,
    last,
    email,
    mobile,
    password,
    items,
    itemsError,
  };
};

const mapDispatchToProps = {
  userInputChange,
 Register:Register
};

export default connect(mapToStateProps, mapDispatchToProps)(Login);
