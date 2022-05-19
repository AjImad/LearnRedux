import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
}

const reservationSlice = createSlice({
    name: 'reservations',
    initialState,
    reducers:{
        addReservation: (state, action) => {
            state.value.push(action.payload)
        },
        removeReservation: (state, action) => {
            state.value.splice(action.payload, 1);
        }
    }
})

export const {addReservation} = reservationSlice.actions;
export const {removeReservation} = reservationSlice.actions;

export default reservationSlice.reducer;