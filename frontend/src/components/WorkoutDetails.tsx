import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { useAuthContext } from '../hooks/useAuthContext'

export function WorkoutDetails({workout}: any) {
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  const handleDelete = async () => {
      
    if (!user) {
      return
    }

    const response = await fetch('http://localhost:4000/api/workouts/' + workout._id, {
      method: 'DELETE',
      headers: {
        'Authorization': `Bearer ${user.token}`
      }
    })

    const json = await response.json()
    
    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
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



