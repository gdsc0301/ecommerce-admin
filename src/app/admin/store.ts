import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import productModalReducer from './products/slices/Modal';
import productFilterReducer from './products/slices/Filter';

const store = configureStore({
  reducer: {
    productModal: productModalReducer,
    productFilter: productFilterReducer
  }
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;