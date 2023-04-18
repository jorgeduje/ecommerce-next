import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: [],
  cart: []
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addCart: (state, action) => {
     state.cart = [...state.cart, action.payload]
    }
  },
})

// Action creators are generated for each case reducer function
export const { addCart } = productSlice.actions

export default productSlice.reducer