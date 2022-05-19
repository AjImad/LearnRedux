import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

export const customerSlice = createSlice({
    name: 'customers',
    initialState,
    reducers: {
        addCustomer: (state, action) => {
            state.value.push(action.payload);
        },
        addCustomerFood: (state, action) => {
            state.value.forEach( customer => {
                if(customer.id === action.payload.id)  
                    customer.food.push(action.payload.food)
            })
        },
        removeCustomer: (state, action) => {
            state.value.splice(state.action, 1);
        }
    }
})

export const {addCustomer} = customerSlice.actions;
export const {removeCustomer} = customerSlice.actions;
export const {addCustomerFood} = customerSlice.actions;

export default customerSlice.reducer;