import { createSlice } from "@reduxjs/toolkit";
const users ={
    name :'zouhir',
    age:23,
    contry:'MA'
}

 const userSlice =createSlice({
    name:'user',
    initialState:users,
    reducers:{
        resetUser:(state)=>{
            //...
        },
        updateUser:(state)=>{
            //...
        },
    }
})
export default userSlice.reducer