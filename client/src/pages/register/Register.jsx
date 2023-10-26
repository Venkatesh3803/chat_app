import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className="login">
            <h2 style={{ textAlign: "center" }}>Sign Up</h2>
            <form action="">
                <div className="inputs">
                    <label htmlFor="">Email :-</label>
                    <input type="text" placeholder="Email" />
                </div>
                <div className="inputs">
                    <label htmlFor="">Password :-</label>
                    <input type="text" placeholder="Password" />
                </div>
                <div className="inputs">
                    <label htmlFor="">ConformPass :-</label>
                    <input type="text" placeholder="ConformPass" />
                </div>
                <button>Login</button>
                <Link to={"/login"} className="link">
                    <p>Already have account! LoginIn</p>
                </Link>
            </form>
        </div>
    )
}

export default Register
