import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import { postNewReview } from '../utils/api';

const PostNewReview = () => {
// bring in user context for username
    const { loggedInUser } = useContext(UserContext)
    const [title, setTitle] = useState({})
    const [reviewBody, setReviewBody] = useState({})
    const [designer, setDesigner] = useState({})
    const [category, setCategory] = useState({})

    const handleReviewTitle = (event) => {
        console.log(event.target.value)
        setTitle(event.target.value)
    }
    const handleReviewBody = (event) => {
        console.log(event.target.value)
        setReviewBody(event.target.value)
    }
    const handleReviewDesigner = (event) => {
        console.log(event.target.value)
        setDesigner(event.target.value)
    }
    const handleCategory = (event) => {
        console.log(event.target.value)
        setCategory(event.target.value)
    }


    const handleSubmit = (event) => {
        event.preventDefault()
        const postedReview = {
            owner: loggedInUser.username,
            title: title,
            review_body: reviewBody,
            designer: designer,
            category: category,
            // could add map function to input so that can only use selected cats.
        }
        console.log(postedReview)
        postNewReview(postedReview)
        // window alert confirming posted and showing review details
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <label>
                Review Title:
            <textarea onChange={(event) => handleReviewTitle(event)} />
            </label>
            <label>
                Post your thoughts:
            <textarea onChange={(event) => handleReviewBody(event)} />
            </label>
            <label>
                Game Designer:
            <input
            type='text'
            id='designer'
            required
            onChange={(event) => handleReviewDesigner(event)}
            />
            </label>
            <label>
                Category:
            <select
            id='category'
            onChange={(event) => handleCategory(event)}>
                <option>strategy</option>
                <option>hidden-roles</option>
                <option>dexterity</option>
                <option>push-your-luck</option>
                <option>roll-and-write</option>
                <option>deck-building</option>
                <option>engine-building</option>
            </select>
            </label>
            <button type='submit'>Post Review</button>
        </form>
    )

}

export default PostNewReview