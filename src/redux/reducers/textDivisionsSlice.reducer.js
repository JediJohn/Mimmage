import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const textDivisionsSlice = createSlice({
  name: 'textDivisions',
  initialState,
  reducers: {
    setTextDivisionsArray: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setTextDivisionsArray } = textDivisionsSlice.actions

export default textDivisionsSlice.reducer