import { useState, useEffect } from "react"
import { getAllWorkouts } from "../ApiServices/ApiCalls";

export default function Workouts() {
    const [workouts, setWorkouts] = useState([])

    //useEffect to get all of the users workout data
    useEffect(() => {
        getAllWorkouts();
    }, [])

    

    return (
        <div className="dashboard-wrapper">
            {/* header */}
            <div className="flex items-center justify-between h-[100px]">
                <p className="text-4xl ms-[20px]">Your Workouts</p>
                <div>
                    <button className="blue-gradient rounded text-2xl text-white p-[5px] me-[20px]">Create</button>
                </div>
            </div>
            {/* header for table */}
        </div>
    )
}