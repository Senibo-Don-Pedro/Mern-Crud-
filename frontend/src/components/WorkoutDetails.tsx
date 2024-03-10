import { useDeleteWorkoutMutation } from "../api/workoutSlice"


export function WorkoutDetails({workout}: any) {
  const [deleteWorkout] = useDeleteWorkoutMutation()

  const handleDelete = async () => {
    await deleteWorkout(workout) 
  }

  return (
    <div className="workout-details">
      <h4>{workout.title}</h4>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Reps: </strong>{workout.reps}</p>
      <p>{workout.createdAt}</p>
      <span onClick={handleDelete}>
         Delete
      </span>
    </div>
  )
}



