import { useState } from 'react'
import { postNewComment } from '../utils/api';


const PostComment = (props) => {
    const {username, review_id } = props
    const [newComment, setNewComment] = useState('')

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
        <form className='ReviewCard__comments' onSubmit={handleSubmit}>
            <label>
                Post comment:
                <input
                    type='text'
                    value={newComment}
                    required
                    onChange={(event) => handleCommentBody(event)}>
                </input>
            </label>
            <button className='Button' type='submit'>Post</button>
        </form>
    )

}

export default PostComment;