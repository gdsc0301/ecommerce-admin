import { createSlice } from "@reduxjs/toolkit";
import { Product } from "../models/Products";

const initialState = {
  isOpen: false,
  newImage: '',
  loading: false,
  product: {} as Product
}

const slice = createSlice({
  name: 'productModal',
  initialState: initialState,
  reducers: {
    open: state => {state.isOpen = true},
    close: state => {state.isOpen = false},
    setNewImage: (state, action: {payload: string}) => {state.newImage = action.payload},

    setLoading: (state, action: {payload: boolean}) => {state.loading = action.payload},

    setOpen: (state, action: {payload: boolean}) => void (state.isOpen = action.payload),
    setProduct: (state, action: {payload: Product}) => {
      state.product = action.payload;
    },
    setProductField: (state, action: {payload: {field: keyof typeof state.product, value: string | string[] | number}}) => {
      state.product = {...state.product, [action.payload.field]: action.payload.value};
    },
    addProductImage: (state, action: {payload: string}) => {
      state.product.images.push(action.payload);
    },
    removeProductImage: (state, action: {payload: string}) => {
      state.product.images = state.product.images.filter(image => image !== action.payload);
    }
  }
});

export { slice as productModalSlice };
export const {
  open: openProductModal,
  close: closeProductModal,
  setNewImage: setProductModalNewImage,
  addProductImage: addProductModalImage,
  removeProductImage: removeProductModalImage,
  setLoading,
  setProduct,
  setProductField,
} = slice.actions;
export default slice.reducer;