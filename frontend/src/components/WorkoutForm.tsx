import { useAddWorkoutMutation } from "../api/workoutSlice.ts"

import { useState } from "react";



const WorkoutForm = () => {

  const [addWorkout, {isLoading}] = useAddWorkoutMutation();

  

  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [err, setErr] = useState(null) 
  const [emptyFields, setEmptyFields] = useState<string[] | never>([])


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const workout = {title,load,reps}

     const response:any = await addWorkout(workout)

     if (response.error) {
      console.log(response.error)
      const errorTitle = response.error.data.error
      const fields = response.error.data.emptyFields

      setErr(errorTitle)
      setEmptyFields(fields)
     } else {
      setTitle('')
      setLoad('')
      setReps('')
      setErr(null)
      setEmptyFields([])
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
      {isLoading ?<button disabled>Adding Workout...</button> :<button>Add workout</button>}
      {err && <div className="error">{err}</div>}

    </form>

  )
}


export default WorkoutForm
