import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import productModalReducer from './products/slices/Modal';
import productFilterReducer from './products/slices/Filter';
import productPageReducer from './products/slices/Page';

const store = configureStore({
  reducer: {
    productModal: productModalReducer,
    productFilter: productFilterReducer,
    productPage: productPageReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;