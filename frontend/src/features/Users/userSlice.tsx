import { createSlice } from "@reduxjs/toolkit";
import { getUsers } from "./userAction";


type initialStateProps = {
  isLoading: boolean;
  content: {
    id: string;
    name: string;
    email: string;
    role: string;
  }[];
  error: Object | null;
};

const initialState: initialStateProps = {
  isLoading: false,
  error: null,
  content: [
    {
        id: "",
        name: "",
        email: "",
        role: "",
    },
  ],
};

export const userSlice = createSlice({
  name: "users",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsers.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.content = action.payload;
    });
    builder.addCase(getUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error;
      state.content = [];
    });
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
  },
});

export default userSlice.reducer;
