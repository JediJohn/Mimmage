import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 'texttospeech' // ['texttospeech', 'human']
}

export const readMode = createSlice({
  name: 'readMode',
  initialState,
  reducers: {
    setReadMode: (state, action) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setReadMode } = readMode.actions

export default readMode.reducer