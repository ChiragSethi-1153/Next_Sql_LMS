"use client"
import authSlice from "@/features/Auth/authSlice"
import bookSlice from "@/features/Books/bookSlice"
import { combineReducers } from "@reduxjs/toolkit"



const rootReducer = combineReducers({
    auth: authSlice,
    book: bookSlice
}
)
export default rootReducer

