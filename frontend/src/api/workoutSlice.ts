import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const workoutSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:4000/api'}),
  tagTypes:['Workouts'],
  endpoints: (builder) => ({
    getWorkouts: builder.query<any,void>({
      query: () => '/workouts',
      providesTags: ['Workouts'],
    }),
    addWorkout: builder.mutation({
      query: (workout) => ({
        url: '/workouts',
        method: 'POST',
        body: workout,
      }),
      invalidatesTags: ['Workouts'],
    }),
    updateWorkout: builder.mutation({
      query: (workout) => ({
        url: `/workouts/${workout._id}`,
        method: 'PUT',
        body: workout,
      }),
      invalidatesTags: ['Workouts'],
    }),
    deleteWorkout: builder.mutation({
      query: ({_id: id}) => ({
        url: `/workouts/${id}`,
        method: 'DELETE',
        body: id,
      }),
      invalidatesTags: ['Workouts'],

    }),
  })
})

export const {
  useGetWorkoutsQuery,
  useAddWorkoutMutation,
  useUpdateWorkoutMutation,
  useDeleteWorkoutMutation,
} = workoutSlice
