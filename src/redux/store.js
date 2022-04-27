import { configureStore } from '@reduxjs/toolkit'
import textDivisionsReducer from './reducers/textDivisionsSlice.reducer'
import segmentColorsReducer from './reducers/segmentColors.reducer'
import activeStepReducer from './reducers/activeStep.reducer'
import readModeReducer from './reducers/readMode.reducer'
import repeatsPerSegment from './reducers/repeatsPerSegment.reducer'
import playbackSpeed from './reducers/playbackSpeed.reducer'
import playModeReducer from './reducers/playMode.reducer'

export const store = configureStore({
  reducer: {
    textDivisions: textDivisionsReducer,
    segmentColors: segmentColorsReducer,
    activeStep: activeStepReducer,
    readMode: readModeReducer,
    repeatsPerSegment: repeatsPerSegment,
    playbackSpeed: playbackSpeed,
    playMode: playModeReducer,
  },
})