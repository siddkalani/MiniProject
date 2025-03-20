import { createSlice } from '@reduxjs/toolkit'


const sidebarSlice = createSlice({
    name: 'sidebar',
    initialState: {
        toggle: false
    }
    ,
    reducers: {
        toggleOpen: (state, action) => {
            state.toggle = true
        },
        toggleClose: (state, action) => {
            state.toggle = false
        }
    }
})

export const sidebarActions = sidebarSlice.actions
export default sidebarSlice