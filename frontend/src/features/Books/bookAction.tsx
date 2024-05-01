import { createAsyncThunk } from '@reduxjs/toolkit'
import { createBooktype, editBookType, getBookType, getBooksType, searchBookType } from './bookType';
import fetchBooks from '@/service/Books/getBooks.service';
import createBook from '@/service/Books/addBook.service';
import fetchBook from '@/service/Books/fetchBook.service';
import editBook from '@/service/Books/editBook.service';
import fetchSearch from '@/service/Books/fetchSearch.service';



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

export const getBook = createAsyncThunk(getBookType, async (bookId : string|string[], { rejectWithValue }) => {
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

export const updateBook = createAsyncThunk(editBookType, async (inputs: any, { rejectWithValue }) => {
    try {
        console.log(inputs)
        const response = await editBook(inputs)
        console.log(response)
        // const data = response?.data
        // console.log(data)
        return response
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})



export const getSearchedBooks = createAsyncThunk(searchBookType, async (input: string, { rejectWithValue }) => {
    try {
        console.log(input)
        const response = await fetchSearch(input)
        console.log(response)
        // const data = response?.data
        // console.log(data)
        return response
    } catch (err) {
        console.log(err)
        return rejectWithValue(err)
    }
})