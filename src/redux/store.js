import { configureStore } from '@reduxjs/toolkit'
import textDivisionsReducer from './reducers/textDivisionsSlice.reducer'
import activeStepReducer from './reducers/activeStep.reducer'
import readModeReducer from './reducers/readMode.reducer'
import repeatsPerSegment from './reducers/repeatsPerSegment.reducer'
import playbackSpeed from './reducers/playbackSpeed.reducer'
import playModeReducer from './reducers/playMode.reducer'
import activePlaySegmentReducer from './reducers/activePlaySegment.reducer'
import volumeReducer from './reducers/volume.reducer'
import currentRepeatNumberReducer from './reducers/currentRepeatNumber.reducer'
import InputTextReducer from './reducers/InputText.reducer'

export const store = configureStore({
  reducer: {
    textDivisions: textDivisionsReducer,
    activeStep: activeStepReducer,
    readMode: readModeReducer,
    repeatsPerSegment: repeatsPerSegment,
    playbackSpeed: playbackSpeed,
    playMode: playModeReducer,
    activePlaySegment: activePlaySegmentReducer,
    volume: volumeReducer,
    currentRepeatNumber: currentRepeatNumberReducer,
    inputText: InputTextReducer,
  },
})