import React, { useEffect, useState } from 'react';
import { getCategories } from '../utils/api';
import {Link} from 'react-router-dom';
import UserProfile from './UserProfile';


const Nav = ()  => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categoriesFromApi => {
            setCategories(categoriesFromApi)
        })
    }, [])

    return (
        <nav className='Nav'>
        {categories.map(category => {
            return <Link key={category.slug} to={`/category/${category.slug}`}>{category.slug} </Link>
        })}
        <UserProfile/>
        <Link to={`/reviews/post-review`}> Add new review </Link>
        </nav>
    )
}

export default Nav;