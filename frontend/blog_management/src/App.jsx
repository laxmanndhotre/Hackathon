import { createContext, useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router'
import Login from './pages/Login'
import Register from './pages/Register'
import Home from './pages/Home'
import { Toaster } from 'sonner'
import AddBlog from './pages/AddBlog'
import AddCategory from './pages/AddCategory'
import MyBlogs from './pages/MyBlogs'
import Search from './components/Search'

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
            <Route path='search' element={<Search/>} />         
            <Route path='addblog' element={<AddBlog/>} />
            <Route path='addcategory' element={<AddCategory />} />
            <Route path='myblog' element={<MyBlogs />} />
            
            
          </Route>
        </Routes>
        </UserContext.Provider>
        <Toaster/>
      </div>
    </>
  )
}

export default App
