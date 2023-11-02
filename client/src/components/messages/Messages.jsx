import "./Messages.css"
import { useSelector } from "react-redux"
import moment from "moment"


const Messages = ({ mess }) => {
  const user = useSelector(state => state.user.user)

  let own = mess?.senderId === user._id

  return (
    <>
      <div className={own ? "text-right" : "text"}>
        {mess.text}
        <div className={own ? "time-right" : "time"}>{moment(mess.createdAt).startOf().fromNow()}</div>
      </div>
    </>

  )
}

export default Messages