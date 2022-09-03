import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product: [],
    restaurant:[]
}

export const allSlice = createSlice({
    name: 'slice',
    initialState,
    reducers: {
        addProduct:(state,action)=>{
            state.product = action.payload
        },
        addRestaurant:(state,action)=>{
            state.restaurant = action.payload
        }
    },
})

// Action creators are generated for each case reducer function
export const { addProduct,addRestaurant } = allSlice.actions

export default allSlice.reducer
