import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      console.log(`addItem: state: ${JSON.stringify(state)} - action: ${JSON.stringify(action)}`);
    },
    removeItem: (state, action) => {
    },
    updateQuantity: (state, action) => {

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
