import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../models/ProductModel';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [] as Product[],
  },
  reducers: {
    add: (state: {value: Product[]}, action: {payload: Product}) => {
      const thisProduct = state.value.find((n) => n.id === action.payload.id);
      if (thisProduct) {
        if (thisProduct) {
          thisProduct.count += action.payload.count;
        } else state.value = [...state.value, action.payload];
      }
    },
    plusOne: (state: {value: Product[]}, action: {payload: number}) => {
      const thisProduct = state.value.find((n) => n.id === action.payload);
      if (thisProduct) {
        thisProduct.count += 1;
      }
    },
    minusOne: (state: {value: Product[]}, action: {payload: number}) => {
      const thisProduct = state.value.find((n) => n.id === action.payload);
      if (thisProduct) {
        if (thisProduct.count === 1) {
          state.value.splice(state.value.indexOf(thisProduct), 1);
        } else {
          thisProduct.count -= 1;
        }
      }
    },
  },
});

export const {
  add, plusOne, minusOne,
} = cartSlice.actions;

export default cartSlice.reducer;
