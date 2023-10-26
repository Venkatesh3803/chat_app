import "./Sidebar.css"
import { BiSearch } from "react-icons/bi"

const Siderbar = () => {
    return (
        <div className="sidebar">
            <div className="search-box">
                <h4>Chat</h4>
                <div className="search">
                    <input type="text" placeholder="Search" />
                    <BiSearch style={{ cursor: "pointer" }} />
                </div>
            </div>
            <div className="chat-list">
                <h4 style={{marginBottom:"1rem"}}>Friends</h4>

                <div className="list">
                    <div className="list-left">
                        <img src="https://images.pexels.com/photos/7611191/pexels-photo-7611191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div className="username">
                            <h4>Username</h4>
                            <p>Last Message</p>
                        </div>
                    </div>
                    <div className="list-right">
                        <p>12:10pm</p>
                        <div className="bedge">2</div>
                    </div>
                </div>
                <div className="list">
                    <div className="list-left">
                        <img src="https://images.pexels.com/photos/7611191/pexels-photo-7611191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div className="username">
                            <h4>Username</h4>
                            <p>Last Message</p>
                        </div>
                    </div>
                    <div className="list-right">
                        <p>12:10pm</p>
                        <div className="bedge">2</div>
                    </div>
                </div>
                <div className="list">
                    <div className="list-left">
                        <img src="https://images.pexels.com/photos/7611191/pexels-photo-7611191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div className="username">
                            <h4>Username</h4>
                            <p>Last Message</p>
                        </div>
                    </div>
                    <div className="list-right">
                        <p>12:10pm</p>
                        <div className="bedge">2</div>
                    </div>
                </div>
                <div className="list">
                    <div className="list-left">
                        <img src="https://images.pexels.com/photos/7611191/pexels-photo-7611191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div className="username">
                            <h4>Username</h4>
                            <p>Last Message</p>
                        </div>
                    </div>
                    <div className="list-right">
                        <p>12:10pm</p>
                        <div className="bedge">2</div>
                    </div>
                </div>
                <div className="list">
                    <div className="list-left">
                        <img src="https://images.pexels.com/photos/7611191/pexels-photo-7611191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                        <div className="username">
                            <h4>Username</h4>
                            <p>Last Message</p>
                        </div>
                    </div>
                    <div className="list-right">
                        <p>12:10pm</p>
                        <div className="bedge">2</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Siderbar
