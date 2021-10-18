import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ModalType = 'delete' | 'menu';

export const modal = createSlice({
  name: 'modal',
  initialState: null as ModalType | null,
  reducers: {
    setModal: (state, action: PayloadAction<ModalType>) => {
      return action.payload;
    },
    removeModal: () => {
      return null;
    },
  },
});

export const { setModal, removeModal } = modal.actions;
export default modal.reducer;
