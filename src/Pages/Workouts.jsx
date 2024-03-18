import { workoutData } from "../tempData"

export default function Workouts() {

    const workoutElems = workoutData.map(item => {
        return (
            <div key={item.id}></div>
        )
    })

    return (
        <div className="dashboard-wrapper border">
            {/* header */}
            <div className="flex items-center justify-between h-[100px]">
                <p className="text-4xl ms-[20px]">Your Workouts</p>
                <div>
                    <button className="blue-gradient rounded text-2xl text-white p-[5px] me-[20px]">Create</button>
                </div>
            </div>
            {/* header for table */}
            {workoutElems}
        </div>
    )
}