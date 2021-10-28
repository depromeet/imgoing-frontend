import { createAsyncThunk } from '@reduxjs/toolkit';

import { Plan, planRemainingTime } from 'types/index';
import { planRequest } from 'utils/request';

const PlanToReq = (plan: Plan) => ({
  arrivalAt: new Date(plan.arrivalAt), // TODO: api 수정되면 string으로만 전달(Date 객체 X)
  arrivalLat: plan.arrival.lat,
  arrivalLng: plan.arrival.lng,
  arrivalName: plan.arrival.name,
  belongings: plan.items,
  bookmarkedTaskIds: plan.tasks.filter((task) => task.isBookmarked).map((task) => task.id),
  departureLat: plan.departure.lat,
  departureLng: plan.departure.lng,
  departureName: plan.departure.name,
  memo: plan.memo,
  name: plan.name,
  id: plan.id || 0,
  task: plan.tasks.map((task) => ({
    isBookmarked: task.isBookmarked,
    name: task.name,
    time: task.duration,
  })),
});

const ResToPlan = (res: any): Plan => {
  return {
    id: res.id,
    name: res.name,
    arrivalAt: res.arrivalAt,
    arrival: {
      name: res.arrivalName,
      lat: res.arrivalLat,
      lng: res.arrivalLng,
    },
    departure: {
      name: res.departureName,
      lat: res.departureLat,
      lng: res.departureLng,
    },
    memo: res.memo,
    items: res.belongings,
    tasks: res.task,
    isPinned: false,
  };
};

export const getPlan = createAsyncThunk('get/plan', async (planId: number, thunkAPI) => {
  try {
    const res = await planRequest({
      url: `/${planId}`,
    });
    const { data, status } = res;
    return ResToPlan(data.data);
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data);
  }
});

export const getPlanList = createAsyncThunk('get/plan', async (_, thunkAPI) => {
  try {
    const { data, status } = await planRequest();
    return data.data.map(ResToPlan);
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data);
  }
});

export const addPlan = createAsyncThunk('add/plan', async (newPlan: Plan, thunkAPI) => {
  try {
    const { data, status } = await planRequest({
      method: 'POST',
      data: PlanToReq(newPlan),
    });
    return ResToPlan(data.data);
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data);
  }
});

export const editPlan = createAsyncThunk('edit/plan', async (editedPlan: Plan, thunkAPI) => {
  try {
    const { data, status } = await planRequest({
      method: 'PUT',
      data: editedPlan,
    });
    return PlanToReq(data.data);
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data);
  }
});

export const deletePlan = createAsyncThunk('delete/plan', async (planId: number, thunkAPI) => {
  try {
    const { data, status } = await planRequest({ url: `/${planId}`, method: 'DELETE' });
    return true;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data);
  }
});

export const getRemainingTime = createAsyncThunk('get/remainingTime', async (_, thunkAPI) => {
  try {
    const res = await planRequest({
      url: 'remaining/time',
    });
    const { data, status } = res.data;
    return data.data as planRemainingTime;
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data);
  }
});
