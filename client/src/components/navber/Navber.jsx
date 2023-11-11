import "./Navber.css"
import { logOut } from "../../redux/AuthReducer"
import { useDispatch } from "react-redux"
import { useState } from "react";
import UserProfile from "../userProfile/UserProfile";

const Navber = () => {
    const dispatch = useDispatch();
    const [profile, setProfile] = useState(false)
    return (
        <>
            <div className='navber'>
                <div className="nav-container">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.puMo9ITfruXP8iQx9cYcqwHaGJ&pid=Api&P=0&h=180" alt="" onClick={() => setProfile(prev => !prev)} />
                    <p style={{ cursor: "pointer" }} onClick={() => dispatch(logOut())}>Logout</p>
                </div>
                {profile && 
                <UserProfile />
                }
            </div>

        </>

    )
}

export default Navber
