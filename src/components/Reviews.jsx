import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getReviews } from '../utils/api'
import { UserContext } from '../contexts/User'

const Reviews = () => {

    const [reviews, setReviews] = useState([])
    const {category_slug} = useParams()
    const [orderBy, setOrderBy] = useState('')
    const [sortBy, setSortBy] = useState('')

    const handleSortBy = (event) => {
        console.log(event.target.value)
        setSortBy(event.target.value)
    }
    const handleOrderBy = (event) => {
        console.log(event)
        setOrderBy(event.target.value)
    }

    useEffect(() => {
        getReviews(category_slug, orderBy, sortBy).then((reviewsFromApi) => {
            setReviews(reviewsFromApi)
        });
    }, [category_slug, orderBy, sortBy]);

    return (
        <main>
        <h2>All Reviews</h2>
        <p>Sort : 
            <select 
            name='sortList'
            id='sortList'
            value={sortBy}
            onChange={handleSortBy}>
                <option value='' disable defaultValue>
                    Select sort by...
                </option>
                <option>created_at</option>
                <option>comment_count</option>
                <option>votes</option>
            </select>
            <select 
            name='orderList'
            id='orderList'
            value={orderBy}
            onChange={handleOrderBy}>
                <option value='' disable defaultValue>
                    Select order...
                </option>   
                <option>asc</option>
                <option>desc</option>
            </select>
        </p>
        <ul className="ReviewList">
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