import { create } from 'zustand'
import { ModalStateType } from '@/shared/store/modal/type'
import { createModalSlice } from '@/shared/store/modal/slice'

export type StoreState = {
  modal: ModalStateType;
}

export const useBoundStore =  create<StoreState>()((...a) => ({
  modal: createModalSlice(...a),
}))