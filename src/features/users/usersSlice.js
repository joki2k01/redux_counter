import { createSlice } from "@reduxjs/toolkit"

const initialState=[
    {id: "0", name: "joki" },
    {id: "1", name: "bala" },
    {id: "2", name: "prithiv" }
]

const usersSlice = createSlice ({
    name:"users",
    initialState,
    reducers: {}
})

export const selectAllUsers=(state)=>state.users;
export default usersSlice.reducer