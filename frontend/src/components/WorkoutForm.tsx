import { useWorkoutsContext } from "../hooks/useWorkoutsContext"
import { useAuthContext } from '../hooks/useAuthContext'

import { useState } from "react";

const WorkoutForm = () => {

  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState<string | null>(null) 
  const [emptyFields, setEmptyFields] = useState<string[] >([])


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()


    if (!user) {
      setError('You must be logged in')
      return
    }

    const workout = {title,load,reps}

    const response = await fetch('https://keepfit-api.onrender.com/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })

    const json = await response.json()

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }

    if (response.ok) {
      setTitle('')
      setLoad('')
      setReps('')
      setError(null)
      setEmptyFields([])
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }
  } 

  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Add a new Workout</h3>

      <label>Exercise Table:</label>
      <input
        type="text"
        onChange={e => setTitle(e.target.value)}
        value={title}
        className={emptyFields.includes('title') ? 'error' : ''}
      />

       
      <label>Load in kg :</label>
      <input
        type="number"
        onChange={e => setLoad(e.target.value)}
        value={load}
        className={emptyFields.includes('load') ? 'error' : ''}
      />
      
      <label>Reps:</label>
      <input
        type="number"
        onChange={e => setReps(e.target.value)} 
        value={reps}
        className={emptyFields.includes('reps') ? 'error' : ''}
      />
      <button>Add workout</button>
      {error && <div className="error">{error}</div>}

    </form>

  )
}


export default WorkoutForm
