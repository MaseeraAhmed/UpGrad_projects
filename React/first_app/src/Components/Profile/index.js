import "./index.css"
import Saybye from "../SayBye";

const Profile = (Props) => {
    const {userDetails } = Props;
    console.log(userDetails)
    return (
        <div>
            <img 
            src={}
            alt="profile-pic"
            />
            ;
            <div>
                <h1>{userDetails.name}</h1>
                <p>{userDetails.role}</p>
            </div>
        </div>
    );
    };
    <div>
        <p className="message">My frnd is a javascript</p>
        <Saybye />
    </div>
};

export default Profile;
