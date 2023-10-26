import "./Homepage.css"
import Siderbar from '../../components/sidebar/Siderbar'
import Chat from '../../components/chat/Chat'

const HomePage = () => {
    return (
        <div className="homepage">
            <Siderbar />
            <Chat />
        </div>
    )
}

export default HomePage