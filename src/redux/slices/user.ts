import { Slices } from '@/constants'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  userId: '',
}

const UserSlice = createSlice({
  name: Slices.user,
  initialState,
  reducers: {
    setUserId: (state, action) => {
      return { userId: action.payload }
    },
  },
})

export const {
  actions: { setUserId },
  reducer: userReducer,
} = UserSlice
