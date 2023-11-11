import "./Homepage.css"
import Chat from '../../components/chat/Chat'
import { useEffect, useRef, useState } from "react";
import { publicRequest } from "../../redux/axios";
import { useSelector } from "react-redux"
import Siderbar from "../../components/sidebar/Siderbar";
import { io } from "socket.io-client";
import Navber from "../../components/navber/Navber";

const HomePage = () => {
    const [conv, setConv] = useState("")
    const [conversation, setConversation] = useState([]);
    const [onlineUsers, setOnlineUsers] = useState([]);
    const user = useSelector(state => state.user.user)
    const socket = useRef()

    useEffect(() => {
        const fetchingConv = async () => {
            const res = await publicRequest.get(`/conversation/${user._id}`)
            setConversation(res.data)
        }
        fetchingConv()
    }, [user._id])

    // socket io

    useEffect(() => {
        socket.current = io("ws://localhost:8900")
        socket.current.emit("addUser", user._id)
        const chatMember = conversation.members?.find(m => m !== user._id)
        socket.current.on("getUsers", users => {
            setOnlineUsers(users?.find((u) => u.userId !== chatMember))
        })
    }, [user])


    return (
        <>
            <div className="homepage">
                <Navber />
                <Siderbar conversation={conversation} setConversation={setConversation} user={user} setConv={setConv} online={onlineUsers} />
                <Chat convId={conv} conversation={conversation} socket={socket} />
            </div>
        </>
    )
}

export default HomePage