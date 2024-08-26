import { createSlice } from "@reduxjs/toolkit";

const globalSlice = createSlice({
    name: "global",
    initialState: {
      title:'Bandwaggon Website' 
    },
    reducers: {}
})

export default globalSlice.reducer;