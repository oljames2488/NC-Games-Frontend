import { useState } from 'react'
// import { useParams } from 'react-router-dom'
// import { useContext } from "react";
// import { UserContext } from "../contexts/User";
import { postNewComment } from '../utils/api';


// need params for review_id to invoke postNewComment
// need user context to assign posted comment to username '/hbj

const PostComment = (props) => {
    const {username, review_id } = props
  //  const { loggedInUser } = useContext(UserContext)
    const [newComment, setNewComment] = useState('')
   // const { review_id } = useParams;

        // hanlde inputs
    const handleCommentBody = (event) => {
        console.log(event.target.value)
        setNewComment(event.target.value)
    }

        // how do we get live update of comments on page?
    const handleSubmit = (event) => {
        event.preventDefault()
        const postedComment = {
            username: username,
            body: newComment
        }
        console.log(postedComment)
        postNewComment(postedComment, review_id)
        window.alert(`Thanks, ${username}! New comment posted successfully!`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Post a comment:
                <input
                    type='text'
                    value={newComment}
                    required
                    onChange={(event) => handleCommentBody(event)}>
                </input>
            </label>
            <button type='submit'>Post</button>
        </form>
    )

}

export default PostComment;