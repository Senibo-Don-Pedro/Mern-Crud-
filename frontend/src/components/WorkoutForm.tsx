import { useState } from "react";
import { useDispatch } from "react-redux";
import { createWorkouts } from "../store";

const WorkoutForm = () => {
  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null) 
  const [emptyFields, setEmptyFields] = useState([])


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const workout = {title,load,reps}

    const response = await fetch("http://localhost:4000/api/workouts",{
      method: "POST",
      body: JSON.stringify(workout),
      headers:{
        'Content-Type':'application/json',
      }
    })

    const json = await response.json() 

    if (!response.ok) {
      setError(json.error) 
      setEmptyFields(json.emptyFields)
    }

    if (response.ok) {
      setTitle("")
      setLoad("")
      setReps("")
      setError(null)
      setEmptyFields([])
      console.log('new workout added',json)
      dispatch(createWorkouts(json))
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
