import { createSlice } from "@reduxjs/toolkit";
import {
  getScheduleThunk,
  getScheduleByIdThunk,
  deleteScheduleByIdThunk,
  addScheduleThunk,
  updateScheduleByIdThunk,
  uploadMaterialsThunk,
  deleteFileByNameThunk,
  addCommentByIdThunk,
} from "./englishLessonsOperations";

const lessonsJillState = {
  isLoading: false,
  error: null,
  lessonsArr: [],
  lessonById: {},
};

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const lessonSlice = createSlice({
  name: "lessons",
  initialState: lessonsJillState,
  extraReducers: (builder) =>
    builder
      .addCase(getScheduleThunk.pending, handlePending)
      .addCase(getScheduleThunk.rejected, handleRejected)
      .addCase(getScheduleThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.lessonsArr = action.payload;
      })

      .addCase(getScheduleByIdThunk.pending, handlePending)
      .addCase(getScheduleByIdThunk.rejected, handleRejected)
      .addCase(getScheduleByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.lessonById = action.payload;
      })

      .addCase(deleteScheduleByIdThunk.pending, handlePending)
      .addCase(deleteScheduleByIdThunk.rejected, handleRejected)
      .addCase(deleteScheduleByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const updatedArr = state.lessonsArr.filter(
          ({ id }) => id !== action.payload
        );
        state.lessonsArr = updatedArr;
      })
      .addCase(addScheduleThunk.pending, handlePending)
      .addCase(addScheduleThunk.rejected, handleRejected)
      .addCase(addScheduleThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.lessonsArr.push(action.payload);
      })
      .addCase(updateScheduleByIdThunk.pending, handlePending)
      .addCase(updateScheduleByIdThunk.rejected, handleRejected)
      .addCase(updateScheduleByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.lessonsArr.findIndex(
          ({ id }) => id === action.payload.id
        );

        if (index !== -1) {
          const currentElement = state.lessonsArr[index];
          const updateElement = { ...currentElement, ...action.payload };

          state.lessonsArr.splice(index, 1, updateElement);
        }
      })
      // UPLOAD FILES
      .addCase(uploadMaterialsThunk.pending, handlePending)
      .addCase(uploadMaterialsThunk.rejected, handleRejected)
      .addCase(uploadMaterialsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        state.lessonById = { ...state.lessonById, ...action.payload };
      })
      // DELETE FILES
      .addCase(deleteFileByNameThunk.pending, handlePending)
      .addCase(deleteFileByNameThunk.rejected, handleRejected)
      .addCase(deleteFileByNameThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.lessonById = { ...state.lessonById, ...action.payload };
      })

      // ADD COMMENT

      .addCase(addCommentByIdThunk.pending, handlePending)
      .addCase(addCommentByIdThunk.rejected, handleRejected)
      .addCase(addCommentByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.lessonById = { ...state.lessonById, ...action.payload };
      }),
});

export const lessonsJillReducer = lessonSlice.reducer;
export const selectLessonsLoading = (state) => state.lessons.isLoading;
export const selectLessonsJillArr = (state) => state.lessons.lessonsArr;
export const selectLessonsById = (state) => state.lessons.lessonById;
export const selectLessonsJillError = (state) => state.lessons.error;
