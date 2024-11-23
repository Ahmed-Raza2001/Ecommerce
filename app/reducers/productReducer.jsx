import { GET_PRODUCTS } from "../actions";

const productReducer = (state, action) => {
  if (action.type === GET_PRODUCTS) {
    return {
      ...state,
      products: action.payload,
    };
  }
};

export default productReducer;
