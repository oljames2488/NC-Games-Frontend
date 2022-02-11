import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getReviews } from '../utils/api'
import { UserContext } from '../contexts/User'
import moment from 'moment'

const Reviews = () => {

    const [reviews, setReviews] = useState([])
    const {category_slug} = useParams()
    const [orderBy, setOrderBy] = useState('desc')
    const [sortBy, setSortBy] = useState('created_at')

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
        <h2 sytle='margin: 0'> Reviews </h2>
        <h3>{category_slug}</h3>
        <p>Sort : 
            <select 
            name='sortList'
            id='sortList'
            value={sortBy}
            onChange={handleSortBy}>
                <option>
                    Select sort by...
                </option>
                <option value='created_at'>recently posted</option>
                <option value='votes'>popularity</option>
            </select>
            <select 
            name='orderList'
            id='orderList'
            value={orderBy}
            onChange={handleOrderBy}>
                <option>
                    Select order...
                </option>   
                <option>asc</option>
                <option>desc</option>
            </select>
        </p>
        <ul className="ReviewList">
        {reviews.map(review => {
            console.log(review)
                return (
                    <li className="ReviewList__Item"key={review.review_id}>
                      <p className='ReviewList__Header'>{review.title} </p>
                      <p className='ReviewList__body'>by {review.owner} | {review.category} | {moment(review.created_at).format("MMM Do 'YY")}</p>
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