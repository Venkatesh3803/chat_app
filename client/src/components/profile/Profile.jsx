import "./Profile.css"

const Profile = ({ setProfile }) => {
    return (
        <div className="profile-card">
            <div className="cancel" onClick={() => setProfile(false)}>X</div>

            <div className="user-info">
                <img src="https://images.pexels.com/photos/7611191/pexels-photo-7611191.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
                <div className="information">
                    <div className="">
                        <h4>Username:-</h4>
                        <p>Sandeep</p>
                    </div>
                    <div className="">
                        <h4>Status:-</h4>
                        <p>Avaliable</p>
                    </div>
                    <div className="">
                        <h4>Username:-</h4>
                        <p>Sandeep</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
