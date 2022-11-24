import React, { Component } from "react";
import { Table } from "react-bootstrap";
//import {Routes, Route, useNavigate} from 'react-router-dom';

export class List extends Component {
    
  constructor(props) {
    super(props);

    this.state = {
      list: null,
    };
  }
  
  componentDidMount() {
    fetch("http://localhost:8081/selectAllMenu").then((response) => {
      response.json().then((result) => {
        // console.warn(result)
        this.setState({ list: result });
      });
    });
  }
  
  
  render() {
    
    console.log("state", this.state);
    return (
      <div className="App">
        <br />
        <br />
        <h1>List Of Food</h1>
        {this.state.list ? (
          <div>
          <Table striped bordered hover>
          <thead>
        <tr>
          <th>#</th>
          <th>MenuName</th>
          <th>MenuImage</th>
          <th>MenuPrice</th>
        </tr>
      </thead>
      
        <tbody>
            {
                this.state.list.map((item, i) => 
              //<div className="list-wrapper">
              //<span>{item.menu_name}</span>
              //<span>{item.menu_image}</span>
              //<span>{item.description}</span>
              //<span>{item.menu_quantity}</span>
              //</div> 
              <tr>
                <td>{item.id}</td>
                <td>{item.menu_name}</td>
                <td>{item.menu_image}</td>
                <td>{item.menu_price}</td>
                
              </tr>
            )}
           
            </tbody>
            </Table>
          </div>
        ) : (
          <p>Please Wait</p>
        )}
      </div>
    );
  }
}

  

export default List;
