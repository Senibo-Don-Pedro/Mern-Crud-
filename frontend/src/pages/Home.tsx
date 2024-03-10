import { useGetWorkoutsQuery } from "../api/workoutSlice"
//components
import {WorkoutDetails} from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"

export type WorkoutType = {
  title: string;
  reps: number;
  load: number;
  _id: string;
  createdAt?: string;
  updatedAt: string;
  __v?: number
}



const Home = () => {

  const {
    data: workouts,
  } = useGetWorkoutsQuery()

  return (
    <div className="home">
      <div className="workouts">
        {workouts && workouts.map((workout:WorkoutType) => (
          <WorkoutDetails key={workout._id} workout={workout}/> 
        ))}
      </div>
      <WorkoutForm/>
    </div>
  )
}

export default Home
