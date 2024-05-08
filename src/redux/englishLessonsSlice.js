import { createSlice } from "@reduxjs/toolkit";
import {
  getScheduleThunk,
  getScheduleByIdThunk,
  deleteScheduleByIdThunk,
  addScheduleThunk,
  updateScheduleByIdThunk,
} from "./englishLessonsOperations";

const lessonsJillState = {
  isLoading: false,
  error: null,
  lessonsJillArr: [],
  lessonJillById: {},
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const lessonJillSlice = createSlice({
  name: "lessonsJill",
  initialState: lessonsJillState,
  extraReducers: (builder) =>
    builder
      .addCase(getScheduleThunk.pending, handlePending)
      .addCase(getScheduleThunk.rejected, handleRejected)
      .addCase(getScheduleThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.lessonsJillArr = action.payload;
      })

      .addCase(getScheduleByIdThunk.pending, handlePending)
      .addCase(getScheduleByIdThunk.rejected, handleRejected)
      .addCase(getScheduleByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.lessonJillById = action.payload;
      })

      .addCase(deleteScheduleByIdThunk.pending, handlePending)
      .addCase(deleteScheduleByIdThunk.rejected, handleRejected)
      .addCase(deleteScheduleByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const updatedArr = state.lessonsJillArr.filter(
          ({ id }) => id !== action.payload
        );
        state.lessonsJillArr = updatedArr;
      })
      .addCase(addScheduleThunk.pending, handlePending)
      .addCase(addScheduleThunk.rejected, handleRejected)
      .addCase(addScheduleThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.lessonsJillArr.push(action.payload);
      })
      .addCase(updateScheduleByIdThunk.pending, handlePending)
      .addCase(updateScheduleByIdThunk.rejected, handleRejected)
      .addCase(updateScheduleByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.lessonsJillArr.findIndex(
          ({ id }) => id === action.payload.id
        );

        if (index !== -1) {
          const currentElement = state.lessonsJillArr[index];
          const updateElement = { ...currentElement, ...action.payload };
          console.log(updateElement);
          state.lessonsJillArr.splice(index, 1, updateElement);
        }
      }),
});

export const lessonsJillReducer = lessonJillSlice.reducer;
export const selectLessonsJillLoading = (state) => state.lessonsJill.isLoading;
export const selectLessonsJillArr = (state) => state.lessonsJill.lessonsJillArr;
export const selectLessonsJillById = (state) =>
  state.lessonsJill.lessonJillById;
export const selectLessonsJillError = (state) => state.lessonsJill.error;
