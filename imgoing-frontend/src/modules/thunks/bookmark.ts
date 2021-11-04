import { createAsyncThunk } from '@reduxjs/toolkit';

import { TaskType } from 'types/index';
import { request } from 'utils/request';

const ResToBookmark = (res: any): TaskType => ({
  id: res.id,
  name: res.name,
  time: res.time,
  isBookmarked: true,
  notification: false,
});

export const getBookmarkList = createAsyncThunk('get/task', async (_, thunkAPI) => {
  try {
    const { data, status } = await request('task', {
      url: '/bookmarked',
    });
    return data.data.map(ResToBookmark);
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data);
  }
});
