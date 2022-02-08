import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleReview, getReviewComments } from '../utils/api'
import Expandable from './Expandable'


const ReviewCard = () => {

    // can copy kudos button to patch votes on both reviews and comments

    const [reviewCard, setReviewCard] = useState({})
    const [comments, setComments] = useState([])
    const {review_id} = useParams()

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
        <p>Votes: {reviewCard.votes} Comments:{reviewCard.comment_count} </p>
        <button>Give kudos if you found this review helpful </button>
        <Expandable>
        <ul>
            {comments.map(comment => {
                return <> 
                <p>{comment.author} on {comment.created_at}: {comment.body}</p>
                <p>🎲 {comment.votes}</p> <button>👍</button> <button>👎</button>
                </>
            })}
        </ul>
        </Expandable>
        </main>
    )
    }

 
      

export default ReviewCard