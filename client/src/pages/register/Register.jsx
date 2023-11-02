import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { register } from '../../redux/AuthReducer'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

const Register = () => {
    const [inputs, setInputs] = useState({})
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            email: inputs.email,
            userName: inputs.userName,
            password: inputs.password,
        }
        if (inputs.password !== inputs.conformpass) {
            return toast.warn("Password does not match")
        }
        console.log((inputs.password !== inputs.conformpass))
        dispatch(register(user))
    }

    return (
        <div className="login">
            <h2 style={{ textAlign: "center" }}>Sign Up</h2>
            <form action="" onSubmit={handleSubmit}>
                <div className="inputs">
                    <label htmlFor="">Email :-</label>
                    <input type="email" placeholder="Email" name='email' required onChange={handleChange} />
                </div>
                <div className="inputs">
                    <label htmlFor="">Username :-</label>
                    <input type="text" placeholder="username" name='userName' required onChange={handleChange} />
                </div> 
                <div className="inputs">
                    <label htmlFor="">Password :-</label>
                    <input type="password" placeholder="Password" name='password' required onChange={handleChange} />
                </div>
                <div className="inputs">
                    <label htmlFor="">ConformPass :-</label>
                    <input type="password" placeholder="ConformPass" name='conformpass' required onChange={handleChange} />
                </div>
                <button type='submit'>Sign Up</button>
                <Link to={"/login"} className="link">
                    <p>Already have account! LoginIn</p>
                </Link>
            </form>
        </div>
    )
}

export default Register
