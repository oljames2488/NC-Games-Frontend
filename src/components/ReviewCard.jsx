import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleReview, getReviewComments } from '../utils/api'
import Expandable from './Expandable'
import Kudos from './Votes'
import PostComment from './PostComment'
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import DeleteCommentByUser from './DeleteCommentByUser'


const ReviewCard = () => {

    // need comment count to auto-update when new comment posted - how? within Postcomment handlesubmit?

    const [reviewCard, setReviewCard] = useState({})
    const [comments, setComments] = useState([])
    const {review_id} = useParams()
    const { loggedInUser } = useContext(UserContext)


    useEffect(() => {
        getSingleReview(review_id).then((reviewFromApi) => {
            setReviewCard(reviewFromApi)
        });
    }, [review_id]);

    useEffect(() => {
        getReviewComments(review_id).then((commentsFromApi) => {
            setComments(commentsFromApi)
        })
    }, [review_id])

    return (
        <main>
        <h2>{reviewCard.title}</h2>
        <h4>A game by: {reviewCard.designer}</h4>
        <img width='250px' height='250px' src={reviewCard.review_img_url} placeholder={reviewCard.title} />
        <p>Reviewed by: {reviewCard.owner} on: {reviewCard.created_at}</p>
        <p>{reviewCard.review_body}</p>
        <Kudos kudos={reviewCard.votes} review_id={reviewCard.review_id} />
        <p>Comments: {reviewCard.comment_count} </p>
        <PostComment review_id={reviewCard.review_id} username={loggedInUser.username}/>
        <Expandable>
        <ul>
            {comments.map(comment => {
                return <> 
                <p>{comment.author} on {comment.created_at}: {comment.body}</p>
                <p>🎲 {comment.votes}</p> <button>👍</button> <button>👎</button>
                <DeleteCommentByUser comment_id={comment.comment_id} author={comment.author} setComments={setComments} />
                </>
            })}
        </ul>
        </Expandable>
        </main>
    )
    }

 
      

export default ReviewCard