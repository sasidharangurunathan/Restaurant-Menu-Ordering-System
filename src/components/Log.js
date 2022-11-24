import React, { Component } from "react";
import axios from "axios";

import { TextField } from "@mui/material";

import { Navbar, Nav, Form, Button, Container } from "react-bootstrap";
import {
  BrowserRouter as Router,
  
  Link,
  Switch,
  Route,
  
  
  Redirect
} from "react-router-dom";
import ProductContainer from "./ProductContainer";
import Login from "./Login";
const heading = {
  text: 'center',
  fontSize: '30px',
  color: 'red',
  fontFamily: 'Times New Roman'
}
//import useNavigate from 'react-router-dom';
export class Log extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  

  login() {
    //const navigate = useNavigate
    console.warn(this.state);
    let array = JSON.stringify(this.state);

    fetch("http://localhost:8081/login", {
      method: "Post",
      headers: {
        "Content-Type": "application/json",
      },
      body: array,
    }).then((result) => {
      //var res=JSON.stringify(result)
      // if(res.error){
      //   alert(res.error);
      //   return
      // }else{
      //   console.log(res)
      // }
      result.json().then((res) => {
        if (res.error) {
          alert(res.error);
          return;
        } else {
          console.log(res.FirstName);
          // if (res != "") {
          //   //navigate('/menu')
          // }
          localStorage.setItem('login',JSON.stringify(this.state))
           alert('Welcome '+res.FirstName);
          window.location.reload(false)
          console.log("check",this.props);
          return <Redirect to="/home"/>;
        
        }
      });
    });
  }
  render() {
    return (
      <div className="App">
        <br />
        <br />
        <br/>
        <div>
          <div className="card w-50 mx-auto">
            <div className="card-header">
            <h1 className="text-color-primary"  style={heading}>Login Page</h1>
            </div>
            <div className="card-body">
            {/* <input
          type="text"
          placeholder="enter name"
          name="user"
         
          onChange={(e) => this.setState({ email: e.target.value })}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="password"
          name="password"
          onChange={(e) => this.setState({ password: e.target.value })}
        /> */}
        
        <TextField
          id="outlined-basic"
          label="UserName"
          variant="outlined"
          type="email"
          onChange={(value) => {
            this.setState({
              props: "email",
              email: value.target.value,
            });
          }}
        />
        <br />< br/>
        <TextField
          id="outlined-basic"
          label="PassWord"
          variant="outlined"
          type="password"
          onChange={(value) => {
            this.setState({
              props: "password",
              password: value.target.value,
            });
          }}
        />
        <br />
        <br />
        <Button
          onClick={() => {
            this.login();
          }}
        >
          Login
        </Button>
        <br />
        
        <Router>
            <Switch>
              <Route exact path="/login" component={Login} />
            </Switch>
          </Router>
          <p>You Didn't have account
          <Nav.Link href="/login">register</Nav.Link></p>
        <br />
        <br />
            </div>
          </div>
        </div>
        <br/>
      </div>
      
    );
  }
}

export default Log;
