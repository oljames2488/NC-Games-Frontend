import { useContext } from "react";
import { UserContext } from "../contexts/User";

const UserProfile = ()  => {
    const { loggedInUser } = useContext(UserContext)

    return <>
    <p>{loggedInUser.username}</p>
    <img width='50px' height='50px' src={loggedInUser.avatar_id}/>
    </>
}

export default UserProfile;