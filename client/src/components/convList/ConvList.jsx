import React, { useEffect, useState } from 'react'
import "./ConvList.css"
import { publicRequest } from '../../redux/axios'

const ConvList = ({ conversation, user, setConv, online }) => {
    const [friends, setFriends] = useState('')
    useEffect(() => {
        let friendId = conversation.members?.find((m) => m !== user._id)
        const fetchingFriends = async () => {
            try {
                const res = await publicRequest.get(`/user/single/${friendId}`)
                setFriends(res.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        fetchingFriends()
    }, [])

    

    return (
        <div className="list" onClick={() => setConv(conversation._id)}>
            <div className="list-left">
                <img src={friends.profilePic ? friends.profilePic : "https://tse3.mm.bing.net/th?id=OIP.puMo9ITfruXP8iQx9cYcqwHaGJ&pid=Api&P=0&h=180"} alt="" />
                <div className="username">
                    <h4>{friends.userName}</h4>
                    <p>{friends._id === online.userId ? "Online" : "offline"}</p>
                </div>
            </div>
            <div className="list-right">
                <p>12:10pm</p>
                <div className="bedge">2</div>
            </div>
        </div>

    )
}

export default ConvList
