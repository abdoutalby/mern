import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import goalReducer from '../features/goals/goalSlice'
import recruterReducer from '../features/recruter/recruterSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    goals: goalReducer,
    recruters:recruterReducer,
  },
})
