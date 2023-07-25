import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./features/counter";
import {userSlice} from "./features/user"

export const store = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        user: userSlice.reducer
    }
})



export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch