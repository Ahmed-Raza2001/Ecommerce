"use client";
import {
  ADD_TO_CART,
  DECREASE_IN_CART,
  INCREASE_IN_CART,
  CLEAR_CART,
  DELETE_ITEM_FROM_CART,
  CALCULATE_TOTAL,
  REMOVE_TOTAL_ITEM_FROM_CART,
  SET_AREA,
  SET_CITY,
  SET_DELIVERY_CHARGES,
  SET_ORDER_TYPE,
  COMPLETE_ORDER,
} from "../actions";
import cartReducer from "../reducers/cartReducer";
import createDataContext from "./createDataContext";

const addToCart = (dispatch) => {
  return async (item) => {
    dispatch({ type: ADD_TO_CART, payload: item });

    // Close Product Model after Product added to cart
  };
};

const clearCart = (dispatch) => {
  return async () => {
    dispatch({ type: CLEAR_CART });
  };
};

const deleteItemFromCart = (dispatch) => {
  return async (item) => {
    dispatch({ type: DELETE_ITEM_FROM_CART, payload: item });
  };
};

const increaseItem = (dispatch) => {
  return async (item) => {
    dispatch({ type: INCREASE_IN_CART, payload: item });
  };
};

const decreaseItem = (dispatch) => {
  return async (id) => {
    dispatch({ type: DECREASE_IN_CART, payload: id });
  };
};

const getCartTotal = (dispatch) => {
  return async () => {
    dispatch({ type: CALCULATE_TOTAL });
  };
};

const removeTotalItemFromCart = (dispatch) => {
  return async (id) => {
    dispatch({ type: REMOVE_TOTAL_ITEM_FROM_CART, payload: id });
  };
};

const setCity = (dispatch) => {
  return (city) => {
    dispatch({ type: SET_CITY, payload: city });
  };
};

const setArea = (dispatch) => {
  return ({ value, deliveryCharges }) => {
    dispatch({ type: SET_AREA, payload: { value, deliveryCharges } });
  };
};

const setOrderType = (dispatch) => {
  return (orderType) => {
    dispatch({ type: SET_ORDER_TYPE, payload: orderType });
  };
};

const setCompleteOrder = (dispatch) => {
  return async (data) => {
    await dispatch({ type: COMPLETE_ORDER, payload: data });
  };
};

export const { Provider, Context } = createDataContext(
  cartReducer,
  {
    addToCart,
    clearCart,
    increaseItem,
    decreaseItem,
    deleteItemFromCart,
    getCartTotal,
    removeTotalItemFromCart,
    setArea,
    setCity,
    setOrderType,
    setCompleteOrder,
  },
  {
    items: [],
    location: {
      orderType: "Delivery",
      city: null,
      area: null,
      deliveryCharges: 0,
    },
    order: [],
    tax: 0,
  }
);
