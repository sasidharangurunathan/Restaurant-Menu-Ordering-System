import * as React from "react";

import { useCart } from "react-use-cart";

import { TextField } from "@mui/material";

import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { Container, Row, Col } from "react-bootstrap";
import "../../src/style/style.css";
import TableContainer from "./table/TableContainer";

function order(props, log, table) {
  console.log("data", props);
  let arr = props;
  console.log("dsds", log);
  console.log("table",table)

  fetch("http://localhost:8081/order", {
    method: "Post",
    headers: {
      "Content-Type": "application/json",
    },

    //   body: arr
    body: JSON.stringify({
      productList: arr,
      userDetails: log,
    }),
  }).then((result) => {
    result.json().then((res) => {
      alert("Added food");
    });
  });
}

const BookTable = () => {
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

//function BookTable() {
  const [person, setPerson] = React.useState("");

  const handleChange = (event) => {
    setPerson(event.target.value);
  };

  return (
    <>
      <br />
      <br />
      <br />
      <div className="App">
      <h1>BookTable</h1>
      </div>
      <br />
      
      <div>
        <Container>
          <Row>
            <Col sm={4}>
              <div className="container">
                <TextField
                  id="outlined-basic"
                  label="FirstName"
                  variant="outlined"
                />
                <br />
                <br />
                <TextField
                  id="outlined-basic"
                  label="MobileNumber"
                  variant="outlined"
                />
                <br />
                <br />
                <TextField
                  id="outlined-basic"
                  label="YourEmail"
                  variant="outlined"
                />
                <br />
                <br />

                <Box sx={{ width: "204px" }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      HowManyPersons
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={person}
                      label="person"
                      onChange={handleChange}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <br />
                <TextField
                  id="outlined-basic"
                  label="Date"
                  variant="outlined"
                  type="date"                />
                <br />
                <br />
                <TextField
                  id="outlined-basic"
                  label="Time"
                  variant="outlined"
                  type="Time"
                />
                <br />
                <br />
              </div>
              <button
            className="btn btn-primary m-2"
            onClick={() => order(items, localStorage.getItem("login"),localStorage.getItem("table"))}
          >
            Reserve Table
          </button>
            </Col>

            <Col sm={8}>
            
           
          <TableContainer/>
          
          
            </Col>
            
          </Row>
        </Container>
      </div>
    </>
  );
}
export default BookTable;
