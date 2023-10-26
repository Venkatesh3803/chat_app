import { useState } from "react"
import Messages from "../messages/Messages"
import "./Chat.css"
import Profile from "../profile/Profile"
import InputEmoji from 'react-input-emoji'

const Chat = () => {
  const [profile, setProfile] = useState(false)
  const [text, setText] = useState("")

  const handleOnEnter = (text) => {
    console.log('enter', text)
  }

  return (
    <>
      <div className="chat">

        <div className="profile">
          <div className="profile-left">
            <img src="https://images.pexels.com/photos/7611191/pexels-photo-7611191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            <div className="online"></div>
            <div className="info">
              <h4>username</h4>
              <p>online</p>
            </div>
          </div>
          <div className="profile-right">
            <span onClick={() => setProfile(prev => !prev)}>Profile</span>
            <span>Call</span>
          </div>
        </div>
        {profile && <Profile setProfile={setProfile} />}
        <Messages />
        <div className="message-inputs">
          <InputEmoji
            value={text}
            onChange={setText}
            cleanOnEnter
            onEnter={handleOnEnter}
            placeholder="Type a message"
          />
          <button className="send">Send</button>
        </div>
      </div>

    </>
  )
}

export default Chat