import { createSlice } from '@reduxjs/toolkit';
import { getBookmarkList } from 'modules/thunks/bookmark';
import { ErrorType, TaskType } from 'types/index';

export const bookmark = createSlice({
  name: 'plan',
  initialState: [] as TaskType[],
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBookmarkList.fulfilled, (state, { payload }) => [...payload])
      .addCase(getBookmarkList.rejected, (state, { payload }) => {
        const { message, status, statusCode } = payload as ErrorType;
        // TODO: 에러 처리
        console.error('[ERROR] ', statusCode, message);
      });
  },
});

export const {} = bookmark.actions;
export default bookmark.reducer;
