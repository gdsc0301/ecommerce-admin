import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  price: {
    from: 0,
    to: 100000
  }
}

const slice = createSlice({
  name: 'productFilter',
  initialState: initialState,
  reducers: {
    setPriceFrom: (state, action: {payload: number}) => {state.price.from = action.payload},
    setPriceTo: (state, action: {payload: number}) => {state.price.to = action.payload}
  }
});

export { slice as productFilterSlice };
export const {
  setPriceFrom: setFilterPriceFrom,
  setPriceTo: setFilterPriceTo
} = slice.actions;

export default slice.reducer;