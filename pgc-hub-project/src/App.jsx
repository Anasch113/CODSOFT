
import './App.css'

import Portal from "./Components/Auth/Portal"
import Home from './Components/Home/Home'
import toast, { Toaster } from 'react-hot-toast';
import Signup from "./Components/Auth/Signup"
import MainPortal from "./Components/MainPortals/MainPortal"
import ProtectedRoute from "./Components/ProtectedRoute"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Assignments from "./Components/MainPortals/Assignments"
import { UserAuthContextProvider } from './context/UserAuthContext'
import Aboutt from "./Components/Home/Aboutt"
import About from "./Components/Home/About"

function App() {


  return (
    <>
      <UserAuthContextProvider>
        <Router>

          <Routes>

            <Route path='/' element={<Home />} />
            <Route path='/portal' element={<Portal />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/aboutt' element={<Aboutt />} />
            <Route path='/portal/mainportal' element={
              <ProtectedRoute>
                <MainPortal />
         
              </ProtectedRoute>
            } />
            <Route path='/portal/mainportal/assignments' element={<ProtectedRoute >
<Assignments/>

            </ProtectedRoute>} />
          </Routes>

        </Router>
      </UserAuthContextProvider>
      <div> <Toaster/></div>
    </>
  )
}

export default App
