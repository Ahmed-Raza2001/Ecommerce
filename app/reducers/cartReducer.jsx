import {
  INCREASE_IN_CART,
  REMOVE_TOTAL_ITEM_FROM_CART,
  ADD_TO_CART,
  CLEAR_CART,
  DELETE_ITEM_FROM_CART,
  CALCULATE_TOTAL,
  SET_AREA,
  SET_CITY,
  SET_DELIVERY_CHARGES,
  SET_ORDER_TYPE,
  COMPLETE_ORDER,
} from "@/app/actions";

const cartReducer = (state, action) => {
  if (action.type === ADD_TO_CART) {
    const itemID = action.payload
      .map((item) => item.id)
      .reduce((item, cv) => {
        return item + cv;
      }, 0);
    const isItemInCart = state.items.find((cartItem) => cartItem.id === itemID);

    if (isItemInCart) {
      return {
        ...state,
        items: state.items.map((cartItem) =>
          cartItem.id === itemID
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      };
    }
    return {
      ...state,
      items: [...state.items, ...action.payload],
    };
  }

  if (action.type === CLEAR_CART) {
    return {
      ...state,
      items: [],
    };
  }

  if (action.type === DELETE_ITEM_FROM_CART) {
    const isItemInCart = state.items.find(
      (cartItem) => cartItem.id === action.payload.id
    );
    if (isItemInCart.quantity === 1) {
      const tempItems = state.items.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        items: tempItems,
      };
    }
    return {
      ...state,
      items: state.items.map((cartItem) =>
        cartItem.id === action.payload.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      ),
    };
  }

  if (action.type === INCREASE_IN_CART) {
    const isItemInCart = state.items.find(
      (cartItem) => cartItem.id === action.payload.id
    );

    if (isItemInCart) {
      return {
        ...state,
        items: state.items.map((cartItem) =>
          cartItem.id === action.payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ),
      };
    }
  }

  if (action.type === CALCULATE_TOTAL) {
    return {
      ...state,
      total: state.items.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0),
    };
  }

  if (action.type === REMOVE_TOTAL_ITEM_FROM_CART) {
    const tempItems = state.items.filter((item) => item.id !== action.payload);
    return {
      ...state,
      items: tempItems,
    };
  }

  if (action.type === SET_CITY) {
    return {
      ...state,
      location: { ...state.location, city: action.payload },
    };
  }

  if (action.type === SET_AREA) {
    const { value, deliveryCharges } = action.payload;
    return {
      ...state,
      location: { ...state.location, area: value, deliveryCharges },
    };
  }

  if (action.type === SET_ORDER_TYPE) {
    return {
      ...state,
      location: { ...state.location, orderType: action.payload },
    };
  }
  if (action.type === COMPLETE_ORDER) {
    return {
      ...state,
      order: action.payload,
    };
  }
  return { ...state };
};

export default cartReducer;
