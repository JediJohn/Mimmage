import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: null
}

export const activePlaySegment = createSlice({
  name: 'activePlaySegment',
  initialState,
  reducers: {
    setActivePlaySegment: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setActivePlaySegment } = activePlaySegment.actions

export default activePlaySegment.reducer