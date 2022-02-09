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
        <ul>
            {users.map(user => {
                return (
                    <li key={user.username}>
                    <h3> {user.username} </h3>
                    <img width='200px' height='150px' src={user.avatar_url} alt={user.username} />
                    <button onClick={() => {setLoggedInUser(user)}}>
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
