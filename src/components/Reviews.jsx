import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getReviews } from '../utils/api'

const Reviews = () => {

    const [reviews, setReviews] = useState([])
    const {category_slug} = useParams()

    useEffect(() => {
        getReviews(category_slug).then((reviewsFromApi) => {
            setReviews(reviewsFromApi)
        });
    }, [category_slug]);

    return (
        <main>
        <h2>All Reviews</h2>
        <ul>
        {reviews.map(review => {
                return (
                    <li key={review.review_id}>
                    <h3>{review.title}</h3>
                      <p>{review.category} {review.created_at}</p>
                      <p>Votes: {review.votes}</p>
                      <Link key={review.reivew_id} to={`/reviews/${review.review_id}`}>Read more...</Link>
                    </li>   
                )
        })}
        </ul>
        </main>
    )
    }
                

export default Reviews