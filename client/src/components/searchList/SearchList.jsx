import React from 'react'
import { publicRequest } from '../../redux/axios'
import { useSelector } from "react-redux"


const SearchList = ({ search, setConversation, conversation, setConv }) => {
    const user = useSelector(state => state.user.user)
    const handleConversation = async (s) => {
        try {
            const res = await publicRequest.get(`/conversation/find/${search._id}/${user._id}`)
            if (res.data !== null) {
                let result = res.data;
                setConv(result._id)
            } else {
                try {
                    const res = await publicRequest.post(`/conversation`, {
                        recevierId: s,
                        senderId: user._id
                    })
                    setConversation([...conversation, res.data])
                } catch (error) {
                    console.log(error.message)
                }
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className="list" onClick={() => handleConversation(search._id)}>
            <div className="list-left">
                <img src={search.profilePic ? search.profilePic : "https://tse3.mm.bing.net/th?id=OIP.puMo9ITfruXP8iQx9cYcqwHaGJ&pid=Api&P=0&h=180"} alt="" />
                <div className="username">
                    <h5>{search.userName}</h5>
                </div>
            </div>
        </div>
    )
}

export default SearchList