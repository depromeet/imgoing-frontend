import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type IdentifyType = 'task' | 'plan';

interface IdentifyState {
  type: IdentifyType;
  id: number;
}

export const identify = createSlice({
  name: 'identify',
  initialState: null as IdentifyState | null,
  reducers: {
    setIdentify: (_state, action: PayloadAction<IdentifyState>) => {
      return action.payload;
    },
    removeIdentify: () => {
      return null;
    },
  },
});

export const { setIdentify, removeIdentify } = identify.actions;
export default identify.reducer;
