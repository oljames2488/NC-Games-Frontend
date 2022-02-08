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
// below isn't working as the state has both username and avatar but only username being mapped from api call?
// set up functio to fetch user by username?
return (
    <main>
        <h2>Boardroom Reviewers</h2>
        <ul>
            {users.map(user => {
                return (
                    <li key={user.username}>
                    <h3> {user.username} </h3>
                    <button onClick={() => {setLoggedInUser(user.username)}}>
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
