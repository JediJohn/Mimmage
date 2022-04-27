import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const segmentColors = createSlice({
  name: 'segmentColors',
  initialState,
  reducers: {
    setSegmentColors: (state, action) => {
      state.value = action.payload
    },
    addSegmentColor: (state, action) => {
        state.value = [...state.value, action.payload]
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSegmentColors, addSegmentColor } = segmentColors.actions

export default segmentColors.reducer