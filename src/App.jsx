import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './Pages/Login'
import SignUp from './Pages/SignUp'
import Dashboard from './Pages/Dashboard'


function App() {

  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path="/" element={<Login />}/>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
