import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './store/reducers/cartReducer';
import languageReducer from './store/reducers/languageReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;
