import { FormValues } from "../../views/Map/components/WalkForm/useWalkForm"
import { createSlice } from "@reduxjs/toolkit"
import { PayloadAction } from "@reduxjs/toolkit"


export interface walk extends FormValues{
    longitude: number
    lattitude: number
    userName: string
    userID: number
}

export interface walks {
    [key: number]: walk
}

const initialState : walks = {}


export const walksSlice = createSlice({
    name: "walks",
    initialState,
    reducers: {
        set: (state, action: PayloadAction<walks>) => {
            return action.payload
        },
        setWalkWithID: (state, action: PayloadAction<{userID: number, walk:Partial<walk>}>) => {
            const { userID, walk } = action.payload;
            state[userID] = { ...state[userID], ...walk };
        },
        deleteWalkWithID: (state, action: PayloadAction<number>) => {
            delete state[action.payload]
        },
    }
})

export const {set, setWalkWithID, deleteWalkWithID} = walksSlice.actions
export default walksSlice.reducer