import React, { useEffect, useState } from 'react';
import { getCategories } from '../utils/api';
import {Link} from 'react-router-dom';
import UserProfile from './UserProfile';

// change nav bar categories into drop down? Map into options inside select?
const Nav = ()  => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories().then(categoriesFromApi => {
            setCategories(categoriesFromApi)
        })
    }, [])

    return (
        <nav className='Nav'>
        <Link style={{color: 'inherit', textDecoration: 'inherit'}}to={`/`}>| 🏡 HOME |</Link>
        {categories.map(category => {
            return <Link style={{color: 'inherit', textDecoration: 'inherit'}} key={category.slug} to={`/category/${category.slug}`}>| {category.slug} |</Link>
        })}
        <Link style={{color: 'inherit', textDecoration: 'inherit'}}to={`/reviews/post-review`}>| Add new review |</Link>
        <Link style={{color: 'inherit', textDecoration: 'inherit'}}to={`/users`}>| Reviewers |</Link>
        <UserProfile/>
        </nav>
    )
}

export default Nav;