import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { UserContext } from '../App'
import { loginUser } from '../services/user'
import {toast} from 'sonner'
import MaterialWelcomeYouToast from '../components/MaterialWelcomeYouToast'

function Login() {
    

    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const signin = async () => {
        // console.log(email)
        // console.log(password)
        try {
            const result = await loginUser(email, password)
            console.log(result.success)
            if (result.status == 'success') {
                window.sessionStorage.setItem('token', result.data.token)
                setUser({
                    name: result.data.fullname,
                    email: result.data.email
                })
                toast.custom(() => (
                <MaterialWelcomeYouToast 
                    title="Login Successful" 
                    description={`Welcome back!`} 
                    status="success" 
                />
                 ), { duration: 3000 });
                navigate('/home')
            }
            else{
                toast.custom(() => (
                    <MaterialWelcomeYouToast
                    title="Login Failed" 
                    description={result.error || 'Check network connection'} 
                    status="error" 
                    />
                ), { duration: 5000 });
                console.log(result.error)
            }
        }
        catch (ex) {
            console.log(ex)
        }
    }

  return (
    <div>
        <div className='mainDiv'>
            <div className='container w-50' >
                <div className="mb-3 mt-3">
                    <label htmlFor="inputEmail" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="inputEmail" placeholder="name@example.com" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <label htmlFor="inputPassword" className="form-label">Password</label>
                    <input type="password" id="inputPassword" className="form-control" placeholder='password' onChange={e => setPassword(e.target.value)} />
                </div>
                <div className='mb-3'>
                    <button className='btn btn-success' onClick={signin}>Signin</button>
                </div>
                <div>
                    <label> Don't have an account ?</label>
                    <Link to="/register"> Click Here</Link>
                </div>
            </div>
      </div>
    </div>
  )
}

export default Login
        
