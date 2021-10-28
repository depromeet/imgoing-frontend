import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export const webviewMessage = createSlice({
  name: 'webviewMessage',
  initialState: null as string | null,
  reducers: {
    setWebViewMessage: (_state, action: PayloadAction<string | null>) => {
      return action.payload;
    },
    clearMessage: () => {
      return null;
    },
  },
});

export const { setWebViewMessage, clearMessage } = webviewMessage.actions;
export default webviewMessage.reducer;
