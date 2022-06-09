import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0 // 0. 'choosetext' 1. 'prepare' 2. 'memorize'
}

const activeStep = createSlice({
  name: 'activeStep',
  initialState,
  reducers: {
    setActiveStep: (state, action) => {
      state.value = action.payload
    },
    nextStep: (state) => {
      if (state.value===1){return}
      state.value += 1
    },
    prevStep: (state) => {
      if (state.value===0){return}
      state.value -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { setActiveStep, prevStep, nextStep } = activeStep.actions

export default activeStep.reducer