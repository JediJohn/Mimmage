import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
  completed: false,
}

const textDivisionsSlice = createSlice({
  name: 'textDivisions',
  initialState,
  reducers: {
    setTextDivisionsArray: (state, action) => {
      state.value = action.payload
    },
    setTextDivisionsCompleted: (state, action) => {
      state.completed = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { setTextDivisionsArray, setTextDivisionsCompleted } = textDivisionsSlice.actions

export default textDivisionsSlice.reducer