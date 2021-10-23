import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import PLANS from 'mocks/plan.mock';
import { Plan } from 'types/index';

export const plan = createSlice({
  name: 'plan',
  initialState: PLANS as Plan[] | [],
  reducers: {
    addPlan: (state, action: PayloadAction<Plan[]>) => {
      return action.payload;
    },
    togglePlanPin: (state, action: PayloadAction<number>) => {
      return state.map((item) => {
        return item.id === action.payload ? { ...item, isPinned: !item.isPinned } : item;
      });
    },
    removePlan: (state, action: PayloadAction<number>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addPlan, togglePlanPin, removePlan } = plan.actions;
export default plan.reducer;
