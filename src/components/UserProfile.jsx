import { useContext } from "react";
import { UserContext } from "../contexts/User";

const UserProfile = ()  => {
    const { loggedInUser } = useContext(UserContext)

    return <>
    <p>Welcome {loggedInUser.username}</p>
    <img className='Nav___profile_avatar' src={loggedInUser.avatar_url}/>
    </>
}

export default UserProfile;