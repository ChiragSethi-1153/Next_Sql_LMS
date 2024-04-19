import { createAsyncThunk } from '@reduxjs/toolkit'
import { loginType, signupType } from './authType'
import registerService from '@/service/Auth/register.service'
import { registerationSchema } from '@/components/Register/RegisterForm'
import type {FieldValues} from "react-hook-form";
export type Users = {
    role: String
    name: String
    email: String
    password: String
}

export type logging = {
    email: String,
    password: String
}


export const registerUsers = createAsyncThunk(signupType, async (inputs: FieldValues, { rejectWithValue }) => {
    try {
        console.log(inputs)
        const response = await registerService(inputs)
        // console.log(response)
        const data = response?.data
        console.log(data)
        return data
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})


export const loginUsers = createAsyncThunk(loginType, async (inputs: logging, {rejectWithValue}) => {
    try{
        // console.log(inputs)
        // const response = await loginService(inputs)
        // // console.log(response)
        // const data = await response.data
        // console.log(data)
        // return data
    }catch(err) {
        console.log(err)
        return rejectWithValue(err)
    }
})