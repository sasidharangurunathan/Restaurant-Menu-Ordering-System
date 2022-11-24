import {
  FETCH_USERS_FAILURE,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  ADD_ITEM,
  RETURN_ITEMS,
  CHANGE_USER,
  CHANGE_USER_ERROR,
} from "./userType";

const initialState = {
  loading: false,
  users: [],
  update: [],
  error: "",
  userItems: [],
  datas: [],
  user: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    //menu_quantity
    case CHANGE_USER:
      console.log("quantityWillChange", state.users);

      let check = state.users.filter((item) => {
        if (action.payload.uid == item.id) {
          item.menu_quantity = action.payload.menu_quantity;
        }
      });
      let check1 = state.users.map((val) => {
        if (val.id == action.payload.id) {
          return { ...val, menu_quantity: action.payload.menu_quantity };
        }
        return val;
      });
      return {
        ...state,
        user: check,
        users: check1,
        // users.menu_quantity: action.payload
      };
    case CHANGE_USER_ERROR:
      console.log("quantityERROR", state.users);
      return {
        ...state,
        user: state.users.filter((item) => {
          if (action.payload.uid == item.id) {
            item.menu_quantity = "";
          }
        }),

        // users.menu_quantity: action.payload
      };

    case FETCH_USERS_SUCCESS:
      console.log("reducers1111", action.payload);
      return {
        ...state,
        loading: false,
        users: action.payload,

        error: "",
      };
    case FETCH_USERS_FAILURE:
      console.log("reducers", action.payload);
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    case ADD_ITEM:
      console.log("reduceraddtocart", action.payload);
      return {
        ...state,
        userItems: action.payload,
      };
    case RETURN_ITEMS:
      return {
        ...state,
        loading: false,
        datas: action.payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
