import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPlanList, addPlan, removePlan, updatePlan } from 'modules/thunks/plan';
import { ErrorType, Plan } from 'types/index';

export const plan = createSlice({
  name: 'plan',
  initialState: [] as Plan[],
  reducers: {
    togglePlanPin: (state, action: PayloadAction<number>) => {
      return state.map((item) => {
        return item.id === action.payload ? { ...item, isPinned: !item.isPinned } : item;
      });
    },
  },
  extraReducers: {
    [getPlanList.pending.type]: (state) => {
      // TODO: 로딩 처리
    },
    [getPlanList.fulfilled.type]: (_state, { payload }: PayloadAction<Plan[]>) => [...payload],
    [getPlanList.rejected.type]: (state, { payload }: PayloadAction<ErrorType>) => {
      const { message, status, statusCode } = payload;
      // TODO: 에러 처리
      console.error('[ERROR] ', statusCode, message);
    },
    [addPlan.pending.type]: (state) => {
      // TODO: 로딩 처리
    },
    [addPlan.fulfilled.type]: (state, { payload }: PayloadAction<Plan>) => [...state, payload],
    [addPlan.rejected.type]: (state, { payload }: PayloadAction<ErrorType>) => {
      const { message, status, statusCode } = payload;
      // TODO: 에러 처리
      console.error('[ERROR] ', statusCode, message);
    },
    [updatePlan.fulfilled.type]: (state, { payload }: PayloadAction<Plan>) =>
      [...state.filter((plan) => plan.id != payload.id), payload].sort((a, b) =>
        a.arrivalAt < b.arrivalAt ? -1 : a.arrivalAt > b.arrivalAt ? 1 : 0,
      ),
    [updatePlan.rejected.type]: (state, { payload }: PayloadAction<ErrorType>) => {
      const { message, status, statusCode } = payload;
      // TODO: 에러 처리
      console.error('[ERROR] ', statusCode, message);
    },
    [removePlan.fulfilled.type]: (state, { payload }: PayloadAction<number>) =>
      state.filter((plan) => plan.id !== payload),
    [removePlan.rejected.type]: (state, { payload }: PayloadAction<ErrorType>) => {
      const { message, status, statusCode } = payload;
      // TODO: 에러 처리
      console.error('[ERROR] ', statusCode, message);
    },
  },
});

export const { togglePlanPin } = plan.actions;
export default plan.reducer;
