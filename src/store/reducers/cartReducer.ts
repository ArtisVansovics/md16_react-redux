import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../models/ProductModel';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [] as Product[],
  },
  reducers: {
    add: (state: {value: Product[]}, action: {payload: Product}) => {
      state.value = [...state.value, action.payload];
    },
    plusOne: (state: {value: Product[]}, action: {payload: number}) => {
      // @ts-ignore
      state.value.find((n) => n.id === action.payload).count += 1;
    },
    minusOne: (state: {value: Product[]}, action: {payload: number}) => {
      // @ts-ignore
      state.value.find((n) => n.id === action.payload).count -= 1;
    },
  },
});

export const {
  add, plusOne, minusOne,
} = cartSlice.actions;

export default cartSlice.reducer;
