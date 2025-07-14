import { create } from 'zustand'
import { createModalSlice } from '@/shared/store/modal/slice'
import { StoreState } from './type'


export const useBoundStore =  create<StoreState>()((...a) => ({
  modal: createModalSlice(...a),
}))