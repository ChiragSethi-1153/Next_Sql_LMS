"use client"
import authSlice from "@/features/Auth/authSlice"
import bookSlice from "@/features/Books/bookSlice"
import userSlice from "@/features/Users/userSlice"
import { combineReducers } from "@reduxjs/toolkit"



const rootReducer = combineReducers({
    auth: authSlice,
    book: bookSlice,
    user: userSlice
}
)
export default rootReducer

