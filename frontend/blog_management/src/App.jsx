import { createContext, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'

export const UserContext=createContext();
function App() {
  const [count, setCount] = useState(0)
  const [user, setUser]=useState(null)

  return (
    <>
      <div>
        <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path='*' element={<Login />} />
          <Route path='/register' element={<Register />} />

          <Route path='/home' element={<Home/>}> 
            <Route/>
          </Route>
        </Routes>
        </UserContext.Provider>
      </div>
    </>
  )
}

export default App
