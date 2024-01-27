import { configureStore } from "@reduxjs/toolkit"
import userReducer from "./userSlice"


const store= configureStore({
    reducer:{
        user: userReducer,
    }
})

console.log(store, "store");

export default store;