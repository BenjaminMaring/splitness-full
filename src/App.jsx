import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeLayout from './Pages/HomeLayout'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Dashboard from './Pages/Dashboard'
import Workouts from './Pages/Workouts'


function App() {
  


  return (
    <div>
      <BrowserRouter >
        <Routes >
          <Route path="/" element={<Login />}/>
          <Route path="/signUp" element={<SignUp />} />
          <Route path="dashboard" element={<HomeLayout />}>
            <Route index element={<Dashboard />}/>
            <Route path="workouts" element={<Workouts/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
