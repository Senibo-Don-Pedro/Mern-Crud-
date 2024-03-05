import { createSlice } from "@reduxjs/toolkit";
//import type { PayloadAction } from '@reduxjs/toolkit'

const workoutSlice = createSlice({
  name: "workout",
  initialState: {
    workouts : null,
  },
  reducers: {
    setWorkouts(state, action) {
      state.workouts = action.payload
    },
    createWorkouts(state, action) {
      state.workouts = [action.payload, ...state.workouts]
    },
    deleteWorkout(state, action) {
      const updated = state.workouts.filter((single)=>(
        single._id !== action.payload
      ))

      state.workouts = updated
    },
  }
})


export const {setWorkouts, createWorkouts, deleteWorkout} = workoutSlice.actions
export const workoutReducer = workoutSlice.reducer
