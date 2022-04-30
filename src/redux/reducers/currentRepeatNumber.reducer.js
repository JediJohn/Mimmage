import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1
}

const currentRepeatNumber = createSlice({
  name: 'currentRepeatNumber',
  initialState,
  reducers: {
    setCurrentRepeatNumber: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCurrentRepeatNumber } = currentRepeatNumber.actions

export default currentRepeatNumber.reducer