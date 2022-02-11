import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getSingleReview, getReviewComments } from '../utils/api'
import Expandable from './Expandable'
import Kudos from './Votes'
import PostComment from './PostComment'
import { useContext } from "react";
import { UserContext } from "../contexts/User";
import DeleteCommentByUser from './DeleteCommentByUser'
import moment from 'moment';


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
        <h4>A game by {reviewCard.designer}</h4>
        <img className='ReviewCard__img'  src={reviewCard.review_img_url} placeholder={reviewCard.title} />
        <div className="ReviewCard">
        <p>Reviewed by {reviewCard.owner} on {moment(reviewCard.created_at).format("MMM Do 'YY")}</p>
        <p>{reviewCard.review_body}</p>
        <Kudos kudos={reviewCard.votes} review_id={reviewCard.review_id} />
        <p>Comments: {reviewCard.comment_count} </p>
        </div>
        <div className='ReviewCard'>
        <PostComment review_id={reviewCard.review_id} username={loggedInUser.username}/>
        <Expandable>
        <ul>
            {comments.map(comment => {
                return <> 
                <p>{comment.author} on {moment(comment.created_at).format("MMM Do 'YY, h:mm")}</p> 
                <p>{comment.body}</p>
                <p>🎲 {comment.votes}</p> <button>👍</button> <button>👎</button>
                <DeleteCommentByUser comment_id={comment.comment_id} author={comment.author} setComments={setComments} />
                </>
            })}
        </ul>
        </Expandable>
        </div>
        </main>
    )
    }

 
      

export default ReviewCard