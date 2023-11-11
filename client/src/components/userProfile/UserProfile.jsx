import { useEffect, useState } from "react"
import "./UserProfile.css"
import { useSelector } from "react-redux"
import { publicRequest } from "../../redux/axios"
import { AiOutlineEdit } from "react-icons/ai"
import { toast } from "react-toastify"
const UserProfile = () => {
    const currUser = useSelector((state) => state.user.user)
    const [user, setUser] = useState({})
    const [editMode, setEditMode] = useState(false)

    const handleChange = (e) => {
        setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    
    useEffect(() => {
        const fetchingUser = async () => {
            try {
                const res = await publicRequest.get(`/user/single/${currUser._id}`)
                setUser(res.data)
            } catch (error) {
                return (error.message)
            }
        }
        fetchingUser()
    }, [])


    const handleUpdate = async () => {
        let update = {
            user
        }
        try {
           const res = await publicRequest.patch(`/user/${user._id}`, update)
            toast.success(res.data)
            setEditMode(false)

        } catch (error) {
            return error.message
        }


    }

    return (
        <div className='user-profile'>
            {editMode ? <span className="cancel" style={{
                position: "absolute", right: "10px", top: '10px'
            }} onClick={() => setEditMode(false)}>X</span> : <AiOutlineEdit className="cancel-icon" onClick={() => setEditMode(true)} />}


            <img src="https://tse3.mm.bing.net/th?id=OIP.puMo9ITfruXP8iQx9cYcqwHaGJ&pid=Api&P=0&h=180" alt="" />
            <div className="user-info">
                <h4>Username:-</h4>
                {editMode ? <input type="text" name="userName" value={user.userName} onChange={handleChange} /> : <span>{user.userName}</span>}

            </div>
            <div className="user-info">
                <h4>email:-</h4>
                {editMode ? <input type="text" name="email" value={user.email} onChange={handleChange} /> : <span>{user.email}</span>}
            </div>
            <div className="user-info">
                <h4>status:-</h4>
                {editMode ? <input type="text" name="status" value={user.status} onChange={handleChange} /> : <span>{user.status ? user.status : "-"}</span>}
            </div>
            {editMode &&
                <button className="btn" onClick={handleUpdate}>Update</button>
            }
        </div>
    )
}

export default UserProfile