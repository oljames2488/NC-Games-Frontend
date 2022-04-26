import { useContext } from "react";
import { useEffect, useState } from 'react'
import { UserContext } from "../contexts/User";
import { getAllUsers } from '../utils/api'

const UserCard = () => {
    const {loggedInUser, setLoggedInUser} = useContext(UserContext)
    const [users, setUsers] = useState([])

    useEffect(() => {
        getAllUsers().then((usersFromApi) => {
            setUsers(usersFromApi)
        })
    }, [])


return (
    <main>
        <h2>Boardroom Reviewers</h2>
        <ul className="ReviewList">
            {users.map(user => {
                return (
                    <li className="ProfileList__Profile" key={user.username}>
                    <h3> {user.username} </h3>
                    <img width='150px' height='100px' src={user.avatar_url} alt={user.username} />
                    <br/>
                    <button className="Button" onClick={() => {setLoggedInUser(user)}}>
                         Log me in 
                    </button>
                    </li>
                )
            })}
        </ul>
    </main>
)
}

export default UserCard;
