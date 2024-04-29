import { createSlice } from '@reduxjs/toolkit'
import { addBooks, getBook, getBooks } from './bookAction';

export type books = {
    id: string,
    title: string,
    author: string,
    genre: string,
    description: string,
    stock: number,
    coverImage: string[]
}

type initialStateProps = {
    isLoading: boolean;
    content: {
        id: string,
        title: string,
        author: string,
        genre: string,
        description: string,
        stock: number ,
        coverImage: string[]
    }[],
    single: {
        id: string,
        title: string,
        author: string,
        genre: string,
        description: string,
        stock: number ,
        coverImage: string[]
    }, 
    error: Object | null;
  };

  const initialState: initialStateProps = {
    isLoading: false,
    error: null,
    content: [{
        id: "",
        title: "",
        author: "",
        genre: "",
        description: "",
        stock: 0,
        coverImage: [""]
    }],
    single: {
        id: "",
        title: "",
        author: "",
        genre: "",
        description: "",
        stock: 0 ,
        coverImage: [""]
    }
  };

export const bookSlice = createSlice({
    name: 'books',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getBooks.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getBooks.fulfilled, (state, action) => {
            state.isLoading = false
            state.content = action.payload
        })
        builder.addCase(getBooks.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
            state.content = []
        })
        builder.addCase(addBooks.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(addBooks.fulfilled, (state, action) => {
            state.isLoading = false
            console.log(action.payload)
            state.content = [...state.content, action.payload]
        })
        builder.addCase(addBooks.rejected, (state, action) => {
            state.isLoading = false
            state.content = []
            state.error = action.error
        })
        builder.addCase(getBook.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getBook.fulfilled, (state, action) => {
            state.isLoading = false
            state.single = action.payload
        })
        builder.addCase(getBook.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
            state.content = []
        })

        // builder.addCase(updateQuestion.pending, (state) => {
        //     state.isLoading = true
        // })
        // builder.addCase(updateQuestion.fulfilled, (state, action) => {
        //     state.isLoading = false

        //     state.content = state.content.map((question) => {

        //         if (question._id === action.payload._id) {
        //             return action.payload
        //         }
        //         else
        //             return question
        //     })

        // })
        // builder.addCase(updateQuestion.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.error = action.error
        // })

    }
})

export default bookSlice.reducer