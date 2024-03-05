import { configureStore } from "@reduxjs/toolkit";
import { setWorkouts, createWorkouts, deleteWorkout, workoutReducer } from "./slices/workoutSlice";



const store = configureStore({
  reducer: {
    workouts: workoutReducer
  }
})

export { store, setWorkouts, createWorkouts, deleteWorkout }



// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
 // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

