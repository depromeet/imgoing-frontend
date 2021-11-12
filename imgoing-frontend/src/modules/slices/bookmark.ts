import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { createBookmark, deleteBookmark, getBookmarkList } from 'modules/thunks/bookmark';
import { BookmarkType, ErrorType } from 'types/index';

export const bookmark = createSlice({
  name: 'plan',
  initialState: [] as BookmarkType[],
  reducers: {},
  extraReducers: {
    [getBookmarkList.fulfilled.type]: (_state, { payload }: PayloadAction<BookmarkType[]>) => [
      ...payload,
    ],
    [getBookmarkList.rejected.type]: (state, { payload }: PayloadAction<ErrorType>) => {
      const { message, status, statusCode } = payload;
      // TODO: 에러 처리
      console.error('[ERROR] ', statusCode, message);
    },
    [createBookmark.fulfilled.type]: (state, { payload }: PayloadAction<BookmarkType>) => [
      ...state,
      payload,
    ],
    [createBookmark.rejected.type]: (state, { payload }: PayloadAction<ErrorType>) => {
      const { message, status, statusCode } = payload;
      // TODO: 에러 처리
      console.error('[ERROR] ', statusCode, message);
    },
    [deleteBookmark.fulfilled.type]: (state, { payload }: PayloadAction<number>) =>
      state.filter((bookmark) => bookmark.id !== payload),
    [deleteBookmark.rejected.type]: (state, { payload }: PayloadAction<ErrorType>) => {
      const { message, status, statusCode } = payload;
      // TODO: 에러 처리
      console.error('[ERROR] ', statusCode, message);
    },
  },
});

export const {} = bookmark.actions;
export default bookmark.reducer;
