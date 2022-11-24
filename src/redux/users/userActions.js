import axios from "axios";
import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
  ADD_ITEM,
  RETURN_ITEMS,
  CHANGE_USER,
  CHANGE_USER_ERROR
  
} from "./userType";

export function changeUser(users) {
  console.log("userscontroller", users.menu_quantity);
  if (users.menu_quantity > 0) {
    return {
      type: CHANGE_USER,
      payload: users,
    };
  } else {
    return{
      type: CHANGE_USER_ERROR,
      payload: users
    
    }
  }
}

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
export const addItem = (props) => {
  console.log("users", props);

  return {
    type: ADD_ITEM,
    payload: props,
  };
};
// export const postItems = (props)=>{
//   return{
//     type:RETURN_ITEMS,
//     payload:props

//   }
// }

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequest);
    axios
      .get("http://localhost:8081/selectAllMenu")
      .then((response) => {
        console.log("saga", response);
        const users = response.data;
        // const menuList = JSON.stringify(response.data)
        console.log('api data',users)
        // localStorage.setItem('apiMenuList',menuList)
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};

// export const postItems = (payload) => {
//   console.log("payloadsaga", payload);
//   let req = JSON.stringify({
//     menu_name: payload.menu_name,
//     menu_price: payload.menu_price,
//     menu_quantity: payload.menu_quantity,
//   });
//   let formData = new FormData();
//   formData.append("menu_name", payload.menu_name);
//   formData.append("menu_price", payload.menu_price);
//   formData.append("menu_quantity", payload.menu_quantity);
//   console.log(formData);
//   const config = {
//     headers: { "content-type": "multipart/form-data" },
//   };
//   return (dispatch) => {
//     dispatch(postItems);
//     console.log("saga12");
//     // var res = yield axios.request({
//     //   method:'post',
//     //   url:"http://localhost:8081/addtocart",
//     //   data:req
//     // })
//     axios
//       .post("http://localhost:8081/addtocart", formData, config)
//       .then((res) => {
//         console.log("saga12", res);
//         const users = res.data;
//         dispatch(fetchUsersSuccess(users));
//       })
//       .catch((error) => {
//         const errorMsg = error.message;
//         dispatch(fetchUsersFailure(errorMsg));
//       });
//   };
// };
