import { useEffect} from "react"
import type { RootState } from "../store"
import { useSelector, useDispatch } from "react-redux"
import { setWorkouts} from "../store"
//components
import {WorkoutDetails} from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"


const Home = () => {
  const allWorkouts = useSelector((state:RootState) => state.workouts.workouts)

  const dispatch = useDispatch()

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('http://localhost:4000/api/workouts')
      const json = await response.json()

      if (response.ok) {
        dispatch(setWorkouts(json))
      }
      
    }

    fetchWorkouts()
    console.log()
  },[])


  return (
    <div className="home">
      <div className="workouts">
        {allWorkouts && allWorkouts.map((workout) => (
          <WorkoutDetails key={workout._id} workout={workout}/> 
        ))}
      </div>
      <WorkoutForm/>
    </div>
  )
}

export default Home
