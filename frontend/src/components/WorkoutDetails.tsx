import { useDispatch } from "react-redux"
import { deleteWorkout } from "../store/index.ts"


export function WorkoutDetails({workout}) {
  const dispatch = useDispatch()


  const handleDelete = async () => {

    const response = await fetch('http://localhost:4000/api/workouts/' + workout._id, {
      method: 'DELETE'
    })

    const json = await response.json()

    
    
    if (response.ok) {
      console.log("deleted", json)
      dispatch(deleteWorkout(json))    
    }

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



