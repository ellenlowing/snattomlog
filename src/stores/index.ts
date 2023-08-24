import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit'
import popUpReducer from './PopUpSlice/index'

export const store = configureStore({
  reducer: {
    popup: popUpReducer,
  },
})
export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
