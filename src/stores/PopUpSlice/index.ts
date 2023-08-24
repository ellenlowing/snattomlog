import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

type PopUpType = {
  isHide: boolean
}

const initialState: PopUpType = {
  isHide: false,
}

const popUpSlice = createSlice({
  name: 'popup',
  initialState,
  reducers: {
    setHide(state, action: PayloadAction<{ isHide: boolean }>) {
      state.isHide = action.payload.isHide
    },
  },
})
export const { setHide } = popUpSlice.actions
export default popUpSlice.reducer
