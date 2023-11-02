import { useEffect, useState } from "react"
import "./ChatTop.css"
import { publicRequest } from "../../redux/axios"
import { useSelector } from "react-redux"
import Profile from "../profile/Profile"

const ChatTop = ({ userConv }) => {
    const user = useSelector((state) => state.user.user)
    const [frnd, setFrnd] = useState("")
    const [profile, setProfile] = useState(false)

    useEffect(() => {
        let friendsId = userConv?.members?.find((m) => m !== user._id)

        const fetchingUser = async () => {
            try {
                const res = await publicRequest.get(`/user/single/${friendsId}`)
                setFrnd(res.data)
            } catch (error) {
                return (error.message)
            }
        }
        fetchingUser()
    }, [userConv])


    return (
        <>
            <div className="chat-top">
                <div className="chat-top-left">
                    <img src={frnd.profilePic ? frnd.profilePic : "https://tse3.mm.bing.net/th?id=OIP.puMo9ITfruXP8iQx9cYcqwHaGJ&pid=Api&P=0&h=180"} alt="" />
                    <div className="online"></div>
                    <div className="info">
                        <h4>{frnd.userName}</h4>
                        <p>online</p>
                    </div>
                </div>
                <div className="chat-top-right">
                    <span onClick={() => setProfile(prev => !prev)}>Profile</span>
                    <span>Call</span>
                </div>
            </div>
            {profile && <Profile setProfile={setProfile} frndProfile = {frnd} />}
        </>
    )
}

export default ChatTop