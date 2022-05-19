import { configureStore } from "@reduxjs/toolkit";
import reservationSlice from "../features/reservationSlice";
import customerSlice from "../features/customerSlice";

export const store = configureStore({
    reducer: {
        reservations: reservationSlice,
        customers: customerSlice,
    }
})