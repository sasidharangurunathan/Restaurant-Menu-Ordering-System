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

const initialState = {
  loading: false,
  users: [],
  cart: [],
  cartPage: [],
  error: "",
  first: "",
  items: "",
  itemsError: "",
  quantity: [],
  updateValue: false,
  menuListApi: [],
  addCartValue: JSON.parse(localStorage.getItem("menuList")),
  //JSON.parse(localStorage.getItem('apiMenuList'))
};

const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case DELETECART:
      let temp1 = state.addCartValue;
      let check1 = state.addCartValue.filter((val) => val.id != action.payload);
      console.log("Check", check1);
      localStorage.setItem("menuList", JSON.stringify(check1));
      return {
        ...state,
        addCartValue: check1,
      };
    case ORDER:
      return {
        ...state,
      };
    case FETCH_CART_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_TO_CART:
      console.log("how much", action.payload);
      let unique, updateValue;
      let temp = state.addCartValue;
      let id1 = action.payload.id;
      let check = state.addCartValue.filter((val) => val.id == id1);
      var addingValue
      if (check.length > 0) {
        temp = state.addCartValue.map((val) => {
          if (val.id == action.payload.id) {
            // console.log(
            //   "adding",
            //   parseInt(val.menu_quantity) +
            //     parseInt(action.payload.menu_quantity)
                addingValue =  parseInt(val.menu_quantity) + parseInt(action.payload.menu_quantity)

                var valuee =  addingValue.toString();
                console.log('valuee',valuee)
            // );
            return {
              ...val,
              menu_quantity:valuee
                // parseInt(val.menu_quantity) +
                // parseInt(action.payload.menu_quantity),
            };
          }
          return val;
        });
      } else {
        temp = [...state.addCartValue, action.payload];
      }
      console.log("Final Array", temp);
      const storeItem = JSON.parse(localStorage.getItem('menuList'));
      console.log('storeItem',storeItem)
      if(action.payload.id == storeItem.map((item)=>item.id)){
        console.log("item",storeItem.map((item)=>item.menu_quantity))
        // addingValue =  parseInt(item.menu_quantity) + parseInt(action.payload.menu_quantity)
        // var value = addingValue.toString()
        // return {
        //   ...storeItem,
        //   menu_quantity:value
        //     // parseInt(val.menu_quantity) +
        //     // parseInt(action.payload.menu_quantity),
        // };
        

      }
      localStorage.setItem("menuList", JSON.stringify(temp));
      return {
        ...state,
        loading: false,
        users: temp,
        addCartValue: temp,
        error: "",
      };

    case ADD_TO_CART_PAGE:
      console.log("cartPacereducer1111", action.payload);

      return {
        ...state,
        loading: false,
        cart: action.payload,
        error: "",
      };
    case FETCH_CART_FAILURE:
      console.log("reducers", action.payload);
      return {
        ...state,
        loading: false,
        users: [],
        cart: [],
        error: action.payload,
      };
    case INPUT_TEXT:
      return {
        ...state,
        first: action.payload,
      };

    //cartpage
    case GETDATA:
      return {
        ...state,
        cartPage: state.users,
      };

    default:
      return state;
  }
};

export default cartReducers;
