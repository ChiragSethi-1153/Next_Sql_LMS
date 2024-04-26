import { createAsyncThunk } from '@reduxjs/toolkit'
import { getBooksType } from './bookType';
import fetchBooks from '@/service/Books/getBooks.service';



export const getBooks = createAsyncThunk(getBooksType, async (_, { rejectWithValue }) => {
    try {
        
        const response = await fetchBooks()
        // console.log(response)
        // const data = response?.data
        // console.log(data)
        return response
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})


