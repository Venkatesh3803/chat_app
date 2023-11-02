import { useState } from "react"
import "./Login.css"
import { Link } from "react-router-dom"
import { login } from "../../redux/AuthReducer"
import { useDispatch } from "react-redux"

const Login = () => {
    const [inputs, setInputs] = useState({})
    const dispatch = useDispatch()
    const handleChange = (e) => {
        setInputs(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let user = {
            email: inputs.email,
            password: inputs.password
        }
        dispatch(login(user))
    }

    return (
        <>
            <div className="login">
                <h2 style={{ textAlign: "center" }}>Login</h2>
                <form action="" onSubmit={handleSubmit}>
                    <div className="inputs">
                        <label htmlFor="">Email :-</label>
                        <input type="email" placeholder="Email" name="email" onChange={handleChange} />
                    </div>
                    <div className="inputs">
                        <label htmlFor="">Password :-</label>
                        <input type="password" placeholder="Password" name="password" onChange={handleChange} />
                    </div>
                    <button type="submit">Login</button>
                    <Link to={"/register"} className="link">
                        <p>Don't have account! SignIn</p>
                    </Link>
                </form>
            </div>
        </>
    )
}

export default Login