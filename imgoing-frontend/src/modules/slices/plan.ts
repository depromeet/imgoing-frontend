import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getPlanList, addPlan, removePlan } from 'modules/thunks/plan';
import { Plan } from 'types/index';

type ErrorType = { message: string; status: string; statusCode: number };

export const plan = createSlice({
  name: 'plan',
  initialState: [] as Plan[],
  reducers: {
    togglePlanPin: (state, action: PayloadAction<number>) => {
      return state.map((item) => {
        return item.id === action.payload ? { ...item, isPinned: !item.isPinned } : item;
      });
    },
    updatePlan: (state, action: PayloadAction<Plan>) => {
      return state.map((item) => {
        return item.id === action.payload.id ? action.payload : item;
      });
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPlanList.pending, (state, action) => {
        // TODO: 로딩 처리
      })
      .addCase(getPlanList.fulfilled, (state, { payload }) => [...payload])
      .addCase(getPlanList.rejected, (state, { payload }) => {
        const { message, status, statusCode } = payload as ErrorType;
        // TODO: 에러 처리
        console.error('[ERROR] ', statusCode, message);
      });
    builder
      .addCase(addPlan.pending, (state, action) => {
        // TODO: 로딩 처리
      })
      .addCase(addPlan.fulfilled, (state, { payload }) => [...state, payload])
      .addCase(addPlan.rejected, (state, { payload }) => {
        const { message, status, statusCode } = payload as ErrorType;
        // TODO: 에러 처리
        console.error('[ERROR] ', statusCode, message);
      });
    builder
      .addCase(removePlan.fulfilled, (state, { payload }) =>
        state.filter((plan) => plan.id !== payload),
      )
      .addCase(removePlan.rejected, (state, { payload }) => {
        const { message, status, statusCode } = payload as ErrorType;
        // TODO: 에러 처리
        console.error('[ERROR] ', statusCode, message);
      });
  },
});

export const { togglePlanPin, updatePlan } = plan.actions;
export default plan.reducer;
