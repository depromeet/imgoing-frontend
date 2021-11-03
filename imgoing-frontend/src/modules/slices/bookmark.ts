import { createSlice } from '@reduxjs/toolkit';
import { createBookmark, deleteBookmark, getBookmarkList } from 'modules/thunks/bookmark';
import { BookmarkType, ErrorType, TaskType } from 'types/index';

export const bookmark = createSlice({
  name: 'plan',
  initialState: [] as BookmarkType[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookmarkList.fulfilled, (state, { payload }) => [...payload])
      .addCase(getBookmarkList.rejected, (state, { payload }) => {
        const { message, status, statusCode } = payload as ErrorType;
        // TODO: 에러 처리
        console.error('[ERROR] ', statusCode, message);
      });
    builder
      .addCase(createBookmark.fulfilled, (state, { payload }) => [...state, payload])
      .addCase(createBookmark.rejected, (state, { payload }) => {
        const { message, status, statusCode } = payload as ErrorType;
        // TODO: 에러 처리
        console.error('[ERROR] ', statusCode, message);
      });
    builder
      .addCase(deleteBookmark.fulfilled, (state, { payload }) =>
        state.filter((bookmark) => bookmark.id !== payload),
      )
      .addCase(deleteBookmark.rejected, (state, { payload }) => {
        const { message, status, statusCode } = payload as ErrorType;
        // TODO: 에러 처리
        console.error('[ERROR] ', statusCode, message);
      });
  },
});

export const {} = bookmark.actions;
export default bookmark.reducer;
