import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type ModalType = 'delete' | 'menu';

export interface ModalPayload {
  modalType: ModalType;
  id?: number;
}

export const modal = createSlice({
  name: 'modal',
  initialState: null as ModalPayload | null,
  reducers: {
    setModal: (state, action: PayloadAction<ModalPayload>) => {
      return action.payload;
    },
    removeModal: () => {
      return null;
    },
  },
});

export const { setModal, removeModal } = modal.actions;
export default modal.reducer;
