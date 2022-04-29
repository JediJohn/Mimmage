import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 50,
}

export const volume = createSlice({
  name: 'volume',
  initialState,
  reducers: {
    setVolume: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setVolume } = volume.actions

export default volume.reducer