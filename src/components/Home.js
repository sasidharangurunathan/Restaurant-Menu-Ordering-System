import { height } from "@mui/system";
import React from "react";
import image from "../image/home4.avif";
import { Container, Row, Col } from "react-bootstrap";
import "../style/style.css";

function Home() {
  var textStyle = {
    position: "absolute",
    top: "40%",

    left: "10%",
    color: "white",
    //transform: translate('-50%, -50%')
  };
  return (
    <div>
      <div>
        <img src={image} style={{ width: "100%", height: "720px" }} />
        <div style={textStyle}>
          <h1>Smart Menu Ordering</h1>
          
            <Row>
              <Col sm={6}>
                <p>
                  Online ordering system that I am proposing here, greatly
                  simplifies the ordering process for both the customer and the
                  restaurant. System presents an interactive and up-to-date menu
                  with all available options in an easy to use manner.
                </p>
              </Col>
              <Col sm={6}></Col>
            </Row>
          
        </div>
      </div>

      <div class="container">
    <div class="row-flex">
      <div class="flex-column-form">
        <h3>
          Make a booking
        </h3>
      <form class="media-centered">
          <div class="form-group">
            <p>
              Please give your number we will call to make a reservation
            </p>
            <input type="name" class="form-control" id="exampleInputName1" aria-describedby="nameHelp" placeholder="Enter your name" />
          </div>
          <div class="form-group">
            <input type="number" class="form-control" id="exampleInputphoneNumber1" placeholder="Enter your phone number" />
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
      </form>
      </div>
      </div>
      </div>



    </div>
    
  );
}

export default Home;
