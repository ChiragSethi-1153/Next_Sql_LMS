import { createAsyncThunk } from '@reduxjs/toolkit'
import { createBooktype, getBookType, getBooksType } from './bookType';
import fetchBooks from '@/service/Books/getBooks.service';
import createBook from '@/service/Books/addBook.service';
import fetchBook from '@/service/Books/fetchBook.service';



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

export const getBook = createAsyncThunk(getBookType, async (bookId, { rejectWithValue }) => {
    try {
        
        const response = await fetchBook(bookId)
        // console.log(response)
        // const data = response?.data
        // console.log(data)
        return response
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})

export const addBooks = createAsyncThunk(createBooktype, async (inputs: any, { rejectWithValue }) => {
    try {
        console.log(inputs)
        const response = await createBook(inputs)
        console.log(response)
        // const data = response?.data
        // console.log(data)
        return response
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})



