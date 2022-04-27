import { configureStore } from '@reduxjs/toolkit'
import textDivisionsReducer from './reducers/textDivisionsSlice.reducer'
import segmentColorsReducer from './reducers/segmentColors.reducer'
import activeStepReducer from './reducers/activeStep.reducer'

export const store = configureStore({
  reducer: {
      textDivisions:textDivisionsReducer,
      segmentColors:segmentColorsReducer,
      activeStep:activeStepReducer,
    },
})