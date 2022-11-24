import axios from "axios";
import {
  FETCH_CART_REQUEST,
  ADD_TO_CART,
  FETCH_CART_FAILURE,
  ADD_TO_CART_PAGE,
  INPUT_TEXT,
  GETDATA,
  DELETECART,
  ORDER,
} from "./cartType";

export const order = () => {
  return {
    type: ORDER,
  };
};
export const getdata = () => {
  return {
    type: GETDATA,
  };
};
export const deletecart = (props) => {
  return {
    type: DELETECART,
    payload: props,
  };
};
export const fetchCartRequest = () => {
  return {
    type: FETCH_CART_REQUEST,
  };
};

export const fetchCartSuccess = (props) => {
  console.log("users", props);
  return {
    type: ADD_TO_CART,
    payload: props,
    //payload:props.item
  };
};
export const fetchCartPageSuccess = (cart) => {
  console.log("cart", cart);
  return {
    type: ADD_TO_CART_PAGE,
    payload: cart,
  };
};

const fetchCartFailure = (error) => {
  return {
    type: FETCH_CART_FAILURE,
    payload: error,
  };
};
export const cartPage = (props) => {
  return {
    type: INPUT_TEXT,
    payload: props,
  };
};

export const fetchCart = (payload) => {
  console.log("payload", payload);
  return (dispatch) => {
    dispatch(fetchCartRequest);
    console.log("saga12");
    axios
      .get("http://localhost:8081/addtocart", payload.users)
      .then((response) => {
        console.log("saga12", response);
        // const users = response.data
        // dispatch(fetchCartSuccess(users))
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCartFailure(errorMsg));
      });
  };
};

export const postItems = (payload) => {
  console.log("payloadsaga", payload);
  // let req = JSON.stringify({
  //   menu_name: payload.menu_name,
  //   menu_price: payload.menu_price,
  //   menu_quantity: payload.menu_quantity,
  // });
  let formData = new FormData();
  formData.append("menu_name", payload.menu_name);
  formData.append("menu_price", payload.menu_price);
  formData.append("menu_quantity", payload.menu_quantity);
  console.log(formData);
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };
  return (dispatch) => {
    dispatch(postItems);
    console.log("saga12");
    // var res = yield axios.request({
    //   method:'post',
    //   url:"http://localhost:8081/addtocart",
    //   data:req
    // })
    axios
      .post("http://localhost:8081/addtocart", formData, config)
      .then((res) => {
        console.log("saga12", res);
        const users = res.data;
        dispatch(fetchCartSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCartFailure(errorMsg));
      });
  };
};

export const order1 = (payload) => {
  console.log("payloadsaga", payload);
  let array=JSON.stringify(payload);
  console.log("arr",array)
  let formData = new FormData();
  formData.append("order_id", 2);
  formData.append("menu_name", payload.menu_name);
  formData.append("menu_price", payload.menu_price);
  formData.append("menu_quantity", payload.menu_quantity);
  console.log(formData);
  const config = {
    headers: { "content-type": "multipart/form-data" },
  };
  let response = axios
    .post("http://localhost:8081/addorderdetails", array)
    .then((res) => {
      console.log("saga12", res);
      //const users = res.data;
      // dispatch(fetchCartSuccess(users));
      return res;
    })
    .catch((error) => {
      const errorMsg = error.message;
      //dispatch(fetchCartFailure(errorMsg));
      return error;
    });
  return (dispatch) => {
    let formData = new FormData();
    formData.append("menu_name", payload.menu_name);
    //formData.append("menu_price", payload.menu_price);
    formData.append("menu_quantity", payload.menu_quantity);
    console.log(formData);
    const config = {
      headers: { "content-type": "multipart/form-data" },
    };
    // dispatch(order1());
    // console.log("saga12");

    // axios
    //   .post("http://localhost:8081/addorders", formData, config)
    //   .then((res) => {
    //     console.log("saga12", res);
    //     //const users = res.data;
    //     // dispatch(fetchCartSuccess(users));
    //   })
    //   .catch((error) => {
    //     const errorMsg = error.message;
    //     dispatch(fetchCartFailure(errorMsg));
    //   });
  };
};

//select cart page
export const cartPages = (payload) => {
  console.log("payload", payload);
  return (dispatch) => {
    dispatch(fetchCartRequest);
    console.log("saga12");
    axios
      .get("http://localhost:8081/selectcart")
      .then((response) => {
        console.log("saga12", response);
        const users = response.data;
        dispatch(fetchCartPageSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchCartFailure(errorMsg));
      });
  };
};
