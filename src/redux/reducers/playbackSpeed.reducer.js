import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 1.0
}

const playbackSpeed = createSlice({
  name: 'playbackSpeed',
  initialState,
  reducers: {
    setPlaybackSpeed: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPlaybackSpeed,  } = playbackSpeed.actions

export default playbackSpeed.reducer