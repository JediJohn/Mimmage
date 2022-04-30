import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  title: "",
  text: "",
  reset: false,
}

const inputText = createSlice({
  name: 'inputText',
  initialState,
  reducers: {
    setInputText: (state, action) => {
      state.text = action.payload
    },
    setInputTitle: (state, action) => {
      state.title = action.payload
    },
    resetTextPrep: (state) => {
      state.reset = !state.reset
    }

  },
})

// Action creators are generated for each case reducer function
export const { setInputText, setInputTitle, resetTextPrep } = inputText.actions

export default inputText.reducer