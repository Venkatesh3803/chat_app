import { useEffect, useRef, useState } from "react"
import Messages from "../messages/Messages"
import "./Chat.css"
import InputEmoji from 'react-input-emoji'
import { publicRequest } from "../../redux/axios"
import { useSelector } from "react-redux"
import ChatTop from "../chatTop/ChatTop"


const Chat = ({ convId, socket }) => {
  const user = useSelector((state) => state.user.user)

  const [text, setText] = useState("")
  const [mess, setMess] = useState([])
  const [arrivalMess, setArrivalMess] = useState(null)
  const [userConv, setUserConv] = useState("")
  const scroll = useRef()

  useEffect(() => {
    const fetchingMessages = async () => {
      const res = await publicRequest.get(`/message/${convId}`)
      setMess(res.data)
    }
    fetchingMessages();
  }, [convId])


  useEffect(() => {
    const fetchingConversation = async () => {
      try {
        const res = await publicRequest.get(`/conversation/single/${convId}`)
        setUserConv(res.data)
      } catch (error) {
        return (error.message)
      }
    }
    fetchingConversation()
  }, [convId])


  const handleMessages = async () => {
    let newMessage = {
      senderId: user._id,
      conversationId: convId,
      text
    }

    let receiverId = userConv?.members?.find((m) => m !== user._id)

    socket?.current?.emit("sendMessage", {
      senderId: user._id,
      receiverId: receiverId,
      text
    })

    try {
      const res = await publicRequest.post("/message", newMessage);
      setMess([...mess, res.data])
      setText("")
    } catch (error) {
      return (error.messages)
    }

  }

  // socket

  useEffect(() => {

    socket?.current?.on("getMessage", (data) => {

      setArrivalMess({
        senderId: data.senderId,
        text: data.text,
        createdAt: Date.now()
      })
    })
  }, [])


  useEffect(() => {
    arrivalMess &&
      userConv?.members?.includes(arrivalMess.senderId) &&
      setMess((prev) => [...prev, arrivalMess])
  }, [userConv, arrivalMess])

  // for smooth scroll

  useEffect(() => {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  }, [mess])


  return (
    <>
      <div className="chat">
        {convId ?
          <>
            <ChatTop userConv={userConv} />
            <div className="messages">
              {mess?.map((m) => {
                return (
                  <Messages mess={m} key={m?._id} />
                )
              })}
            </div>
            <div className="message-inputs">
              <InputEmoji
                value={text}
                onChange={setText}
                placeholder="Type a message"
              />
              <button className="send" onClick={handleMessages}>Send</button>
            </div>
          </>
          :
          <span className="conv-text">Start Conversation </span>}
      </div>

    </>
  )
}

export default Chat