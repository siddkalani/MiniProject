import { configureStore, createSlice } from '@reduxjs/toolkit'
import sidebarSlice from './slices/siderbarSlice'
import userDetailSlice from './slices/userDetailSlice'
import cartSlice from './slices/cartSlice'

const hotelStore = configureStore({
    reducer: {
        sidebar: sidebarSlice.reducer,
        users: userDetailSlice.reducer,
        cart: cartSlice.reducer
    }
})

export default hotelStore