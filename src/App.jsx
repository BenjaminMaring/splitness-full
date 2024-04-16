import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeLayout from './Pages/HomeLayout'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Dashboard from './Pages/Dashboard'
import Workouts from './Pages/Workouts'
import WorkoutDoc from './Pages/WorkoutDoc'



function App() {
  
  return (
    <div className="overflow-x-hidden h-[100vh]">
      <BrowserRouter >
        <Routes >
          <Route path="/" element={<Login />}/>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="dashboard" element={<HomeLayout />}>
            <Route index element={<Dashboard />}/>
            <Route path="workouts" element={<Workouts/>}/>
          </Route>
          <Route path="workout/:workout_id" element={<WorkoutDoc />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
