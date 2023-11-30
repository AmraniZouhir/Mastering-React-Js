import { configureStore } from "@reduxjs/toolkit";
import  userSlice  from "../Features/UsersSlaice";

export const Store =configureStore({
    reducer:{
        user:userSlice
    }
})