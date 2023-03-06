import axios from "axios";
import { useHistory } from "react-router-dom";

import {
  
  ADD_CUSTOMER,
  FETCH_CUSTOMER_FAILURE,
  USER_INPUT_CHANGE,
} from "./cusType";
export const fetchCustomerSuccess = () => {
  console.log("cart");
  return {
    type: ADD_CUSTOMER,
  };
};
export const userInputChange = ({ props, value }) => {
  return {
    type: USER_INPUT_CHANGE,
    payload: { props, value },
  };
};
const fetchCustomerFailure = (error) => {
  return {
    type: FETCH_CUSTOMER_FAILURE,
    payload: error,
  };
};


export const Register = (first, last, email, mobile, password) => {
  console.log("payloadsaga", first, last, email, mobile, password);
  // let req = JSON.stringify({
  //   menu_name: payload.menu_name,
  //   menu_price: payload.menu_price,
  //   menu_quantity: payload.menu_quantity,
  // });
  let formData = new FormData();
  formData.append("FirstName", first);
  formData.append("LastName", last);
  formData.append("Email", email);
  formData.append("Mobile", mobile);
  formData.append("password", password);
  console.log((formData));
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };
  return (dispatch) => {
    dispatch(Register);
    console.log("saga12");

    axios
      .post("http://localhost:8081/register", formData, config)
      .then((res) => {
        console.log("check",formData)
        console.log("saga12", res);
        //const customer = res.data;
        //dispatch(fetchCustomerSuccess(customer));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCustomerFailure(errorMsg));
      });
  };
};
export const sigin = ( email, password) => {
  console.log("payloadsaga",  email, password);
  
  let req = JSON.stringify({
    email: email,
    password: password,
    
  });
//   let formData = new FormData();
  
//   formData.append("Email", email);
//   formData.append("Password", password);
//   console.log(("check",formData));
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };
//   console.log(("check",formData));
  return (dispatch) => {
    dispatch(sigin);
    console.log("saga12");
    // let promise = axios.get("http://localhost:8081/login", req, config);
    // console.log(promise);
    // promise.then(function(response){
    //   console.log(response);
    // });
    axios
      .get("http://localhost:8081/login", req, config)
      .then((response) => {
        console.log("saga12", JSON.stringify(response));
        
        // const users = response.data;

        // if(res.length > 0) {
        //     history.push("/menu");
        //   }
        //const customer = res.data;
        //dispatch(fetchCustomerSuccess(customer));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCustomerFailure(errorMsg));
      });
  };
};
