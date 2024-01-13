import { configureStore } from '@reduxjs/toolkit'
import { optionReducer } from './Option'
import { questionReducer } from './Question'

export const store = configureStore({
  reducer: {
    options: optionReducer,
    question:questionReducer
  },
})