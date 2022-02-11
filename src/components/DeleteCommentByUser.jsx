import { useContext } from "react";
import { UserContext } from "../contexts/User";
import {deleteUserComment} from '../utils/api'

const DeleteCommentByUser = (props) => {
    const {comment_id, author} = props
    const {loggedInUser } = useContext(UserContext)

    const deleteComment = () => {
        deleteUserComment(comment_id).catch((err) => {
            console.log(err)
        })
        alert(`Comment ${comment_id} removed from review`)
    }

    if (loggedInUser.username === author) {
        return (
            <>
            <button onClick={() => {
                deleteComment()
            }}>
                🗑
            </button>
            </>
        )
    } else {
        return <></>
    }

}

export default DeleteCommentByUser