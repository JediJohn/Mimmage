import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 24
}

export const repeatsPerSegment = createSlice({
  name: 'repeatsPerSegment',
  initialState,
  reducers: {
    setRepeatsPerSegment: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setRepeatsPerSegment } = repeatsPerSegment.actions

export default repeatsPerSegment.reducer