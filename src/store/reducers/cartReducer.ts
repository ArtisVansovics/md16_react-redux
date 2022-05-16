import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../models/ProductModel';

const findById = (state : {value: Product[]}, action: {payload: Product}) => (
  state.value.find((n) => n.id === action.payload.id)
);
const findByIdNumber = (state : {value: Product[]}, action: {payload: number}) => (
  state.value.find((n) => n.id === action.payload)
);

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    value: [] as Product[],
  },
  reducers: {
    add: (state: {value: Product[]}, action: {payload: Product}) => {
      if (findById(state, action)) {
        // @ts-ignore
        findById(state, action).count += action.payload.count;
      } else state.value = [...state.value, action.payload];
    },
    plusOne: (state: {value: Product[]}, action: {payload: number}) => {
      // @ts-ignore
      findByIdNumber(state, action).count += 1;
    },
    minusOne: (state: {value: Product[]}, action: {payload: number}) => {
      // @ts-ignore
      findByIdNumber(state, action).count -= 1;
    },
  },
});

export const {
  add, plusOne, minusOne,
} = cartSlice.actions;

export default cartSlice.reducer;
