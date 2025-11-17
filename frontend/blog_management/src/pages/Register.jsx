import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router'
import { registerUser } from '../services/user'
import { toast } from 'sonner'

function Register() {
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [mobile, setMobile] = useState('')
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        let formErrors = {}
        if (!name.trim()) {
            formErrors.name = 'Name is required'
        }
        if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = 'Valid email is required'
        }
        // if (!password || password.length < 8 || !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/.test(password)) {
        //     formErrors.password = 'Password must be 8-20 characters long, contain letters and numbers, and no spaces/special characters.'
        // }
        if (!mobile || !/^\d{10}$/.test(mobile)) {
            formErrors.mobile = 'Mobile number must be 10 digits'
        }
        setErrors(formErrors)
        return Object.keys(formErrors).length === 0
    }
    const signup = async () => {
        if (!validateForm()) {
            toast.error('Please fix the errors in the form')
            return
        }
        const result = await registerUser(name, email, password, mobile)
        if (result.status == 'success') {
            toast.success('Signup Successful')
            navigate('/')
        }
        else
            toast.error(result.error)
    }
    return (
        <div className='container w-75'>
            <div className="mb-3 mt-3">
                <label htmlFor="inputName" className="form-label">Name</label>
                <input type="text" className="form-control" id="inputName" placeholder="name" onChange={e => setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="inputEmail" className="form-label">Email address</label>
                <input type="email" className="form-control" id="inputEmail" placeholder="name@example.com" onChange={e => setEmail(e.target.value)} />
            </div>
            <div className='mb-3'>
                <label htmlFor="inputPassword" className="form-label">Password</label>
                <input type="password" id="inputPassword" className="form-control" aria-describedby="passwordHelpBlock" placeholder='password' onChange={e => setPassword(e.target.value)} />
                <div id="passwordHelpBlock" className="form-text">
                    Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                </div>
            </div>
            <div className="mb-3">
                <label htmlFor="inputMobile" className="form-label">Phone</label>
                <input type="tel" className="form-control" id="inputMobile" placeholder="9999999999" onChange={e => setMobile(e.target.value)} />
            </div>
            <div className='mb-3'>
                <button className='btn btn-success' onClick={signup}>Signup</button>
            </div>
            <div>
                <label> Have an account ?</label>
                <Link to="/"> Click Here</Link>
            </div>
        </div>
    )
  
}

export default Register
