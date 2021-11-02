import { createAsyncThunk } from '@reduxjs/toolkit';

import { Plan, planRemainingTime } from 'types/index';
import { planRequest } from 'utils/request';

const PlanToReq = (plan: Plan) => ({
  arrivalAt: plan.arrivalAt,
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
  task: plan.tasks.map((task) => ({
    isBookmarked: task.isBookmarked,
    name: task.name,
    time: task.time,
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

export const updatePlan = createAsyncThunk('edit/plan', async (editedPlan: Plan, thunkAPI) => {
  try {
    const { data, status } = await planRequest({
      method: 'PUT',
      data: { ...PlanToReq(editedPlan), id: editedPlan.id },
    });
    return ResToPlan(data.data);
  } catch (error: any) {
    return thunkAPI.rejectWithValue(error?.response?.data);
  }
});

export const removePlan = createAsyncThunk('delete/plan', async (planId: number, thunkAPI) => {
  try {
    const { data, status } = await planRequest({ url: `/${planId}`, method: 'DELETE' });
    return planId;
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
