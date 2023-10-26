import "./Login.css"
import img1 from "../../images/loginpage.png"
import { Link } from "react-router-dom"

const Login = () => {
    return (
        <>
            <div className="login">
                <h2 style={{textAlign:"center"}}>Login</h2>
                <form action="">
                    <div className="inputs">
                        <label htmlFor="">Email :-</label>
                        <input type="text" placeholder="Email" />
                    </div>
                    <div className="inputs">
                        <label htmlFor="">Password :-</label>
                        <input type="text" placeholder="Password" />
                    </div>
                    <button>Login</button>
                    <Link to={"/register"} className="link">
                    <p>Don't have account! SignIn</p>
                    </Link>
                </form>
            </div>
        </>
    )
}

export default Login