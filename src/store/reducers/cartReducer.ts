import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../models/ProductModel';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [] as Product[],
  },
  reducers: {
    add: (state: {value: Product[]}, action: {payload: Product}) => {
      // @ts-ignore
      state.value = [...state.value, action.payload];
    },
  },
});

export const {
  add,
} = cartSlice.actions;

export default cartSlice.reducer;
