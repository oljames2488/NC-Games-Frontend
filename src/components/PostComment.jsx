import { useState } from 'react'
import { postNewComment } from '../utils/api';


const PostComment = (props) => {
    const {username, review_id, setComments} = props
    const [newComment, setNewComment] = useState('')

    const handleCommentBody = (event) => {
        setNewComment(event.target.value)
    }

        // how do we get live update of comments on page?
    const handleSubmit = (event) => {
        event.preventDefault()
        const postedComment = {
            username: username,
            body: newComment
        }
        postNewComment(postedComment, review_id)
        .then(() => {
            setComments((current) => {
                return [postedComment, ...current]
            })
        })
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