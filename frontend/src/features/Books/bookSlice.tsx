import { createSlice } from '@reduxjs/toolkit'
import { getBooks } from './bookAction';

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
    }[] 
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
            console.log(action.payload)
            state.content = action.payload
        })
        builder.addCase(getBooks.rejected, (state, action) => {
            state.isLoading = false
            state.error = action.error
            state.content = []
        })
        // builder.addCase(createQuestions.pending, (state) => {
        //     state.isLoading = true
        // })
        // builder.addCase(createQuestions.fulfilled, (state, action) => {
        //     state.isLoading = false
        //     state.content = [...state.content, action.payload]
        // })
        // builder.addCase(createQuestions.rejected, (state, action) => {
        //     state.isLoading = false
        //     state.content = []
        //     state.error = action.error
        // })

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