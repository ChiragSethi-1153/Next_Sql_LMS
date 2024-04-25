import { createAsyncThunk } from '@reduxjs/toolkit'
import { getUsersType } from './userType';
import fetchUsers from '@/service/Users/fetchUsers.service';



export const getUsers = createAsyncThunk(getUsersType, async (_, { rejectWithValue }) => {
    try {
        
        const response = await fetchUsers()
        console.log(response)
        // const data = response?.data
        // console.log(data)
        return response
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})


