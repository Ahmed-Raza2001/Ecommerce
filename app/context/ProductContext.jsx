"use client";

import { GET_PRODUCTS } from "../actions";
import productReducer from "../reducers/productReducer";
import { createClient } from "../utils/supabase/client";
import createDataContext from "./createDataContext";
const supabase = createClient();

const getProducts = (dispatch) => {
  return async () => {
    try {
      const { data: restaurantProducts, error } = await supabase
        .from("restaurantProducts")
        .select("*");
      dispatch({ type: GET_PRODUCTS, payload: restaurantProducts });
    } catch (error) {
      console.log(error);
    }
  };
};

export const { Provider, Context } = createDataContext(
  productReducer,
  {
    getProducts,
  },
  {
    products: [],
  }
);
