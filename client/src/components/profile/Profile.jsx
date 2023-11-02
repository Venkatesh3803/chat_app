import "./Profile.css"

const Profile = ({ setProfile, frndProfile }) => {
    return (
        <div className="profile-card">
            <div className="cancel" onClick={() => setProfile(false)}>X</div>
            <div className="user-info">
            <img src={frndProfile.profilePic ? frndProfile.profilePic : "https://tse3.mm.bing.net/th?id=OIP.puMo9ITfruXP8iQx9cYcqwHaGJ&pid=Api&P=0&h=180"} alt="" />

                <div className="information">
                    <div className="">
                        <h4>Username:-</h4>
                        <p>{frndProfile.userName}</p>
                    </div>
                    <div className="">
                        <h4>Status:-</h4>
                        <p>{frndProfile.status}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
