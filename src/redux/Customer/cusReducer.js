import {
  
  ADD_CUSTOMER,
  FETCH_CUSTOMER_FAILURE,
  USER_INPUT_CHANGE,
} from "./cusType";

const initialState = {
  loading: false,
  items: "",
  itemsError: "",
  error: "",
  first: "",
  last: "",
  email: "",
  mobile: "",
  customer: [],
};

const customerReducers = (state = initialState, action) => {
  switch (action.type) {
    case USER_INPUT_CHANGE:
      return {
        ...state,
        [action.payload.props]: action.payload.value,
      };
    
    case ADD_CUSTOMER:
      console.log("cartPacereducer1111", action.payload);

      return {
        ...state,
        loading: false,
        customer: action.payload,
        error: "",
      };
    case FETCH_CUSTOMER_FAILURE:
      console.log("reducers", action.payload);
      return {
        ...state,
        loading: false,
        customer: [],

        error: action.payload,
      };

    default:
      return state;
  }
};

export default customerReducers;
