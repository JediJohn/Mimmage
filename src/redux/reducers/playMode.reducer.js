import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'stopped' // 'stopped', 'playing', 'recording'
}

export const playMode = createSlice({
  name: 'playMode',
  initialState,
  reducers: {
    setPlayMode: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPlayMode } = playMode.actions

export default playMode.reducer