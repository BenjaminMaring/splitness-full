import { useState, useEffect } from "react"
import { getAllWorkouts } from "../ApiServices/ApiCalls";
import Modal from "../flowbite/Modal";
import WorkoutSettings from "../flowbite/WorkoutSettings";
import { useNavigate } from "react-router-dom";

export default function Workouts() {
    const [workouts, setWorkouts] = useState([])
    const navigate = useNavigate();

    //useEffect to get all of the users workout data
    useEffect(() => {
        handleGetAllWorkouts();
    }, [])

    const handleGetAllWorkouts = async () => {
        const data = await getAllWorkouts();
        setWorkouts(data);
    }

    const goToDoc = (workout_id) => {
        navigate(`/workout/${workout_id}`);
    }

    const options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };

    const workoutElems = workouts.map(workout => {

        let date = new Date(workout.last_edited);
        date = date.toLocaleDateString('en-US', options);

        return (
            <div 
                key={workout.workout_id} 
                className="w-[100%] border-t-2 p-[10px] flex text-2xl items-center justify-between hover:bg-gray-200"
                onClick={() => goToDoc(workout.workout_id)}
            >
                <p>{workout.workout_name}</p>
                {/* put info about the doc here */}
                <div>

                </div>
                <Modal 
                    component={<WorkoutSettings workoutData={workout} />} 
                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="rgba(0,0,0,0.5)" fillRule="evenodd" d="M12 20a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4m0-6a2 2 0 1 1 0-4a2 2 0 0 1 0 4"></path></svg>}
                />
            </div>
        )
    })

    return (
        <div className="relative dashboard-wrapper px-[20px] h-[calc(100vh-70px)]">
            {/* header */}
            <div className="flex items-center justify-between h-[100px]">
                <p className="text-4xl">Your Workouts</p>
                <div>
                    <button className="blue-gradient rounded text-2xl text-white p-[5px]">Create</button>
                </div>
            </div>
            {workoutElems}
        </div>
    )
}