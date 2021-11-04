import { createAsyncThunk } from '@reduxjs/toolkit';

import { BookmarkType, TaskType } from 'types/index';
import { request } from 'utils/request';

const BookmarkToReq = (task: TaskType) => ({
  isBookmarked: true,
  name: task.name,
  time: task.time,
});

const ResToBookmark = (res: any): BookmarkType => ({
  id: res.id,
  name: res.name,
  time: res.time,
  isBookmarked: true,
  notification: false,
});

export const getBookmarkList = createAsyncThunk('get/bookmark', async (_, thunkAPI) => {
  try {
    const { data, status } = await request('task', {
      url: '/bookmarked',
    });
    return data.data.map(ResToBookmark);
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data);
  }
});

export const createBookmark = createAsyncThunk(
  'create/bookmark',
  async (newTask: TaskType, thunkAPI) => {
    try {
      const { data, status } = await request('task', {
        method: 'POST',
        data: BookmarkToReq(newTask),
      });
      return ResToBookmark(data.data);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  },
);

export const deleteBookmark = createAsyncThunk(
  'delete/bookmark',
  async (bookmarkId: number, thunkAPI) => {
    try {
      const { data, status } = await request('task', { url: `/${bookmarkId}`, method: 'DELETE' });
      return bookmarkId;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error?.response?.data);
    }
  },
);
