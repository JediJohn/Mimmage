import { configureStore } from '@reduxjs/toolkit'
import textDivisionsReducer from './reducers/textDivisionsSlice.reducer'
import segmentColorsReducer from './reducers/segmentColors.reducer'

export const store = configureStore({
  reducer: {
      textDivisions:textDivisionsReducer,
      segmentColors:segmentColorsReducer,
    },
})