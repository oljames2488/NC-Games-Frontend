import React from 'react';
import {Link} from 'react-router-dom';


const Header = ()  => {
    return (
        <>
        <Link to="/"><img className='Header-Homepage-Logo' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZac3pzaViD1cvpt2QccKZVbuj4_Mf75bKg&usqp=CAU" alt='Logo'/></Link>
        <h1 className='App-header'>
            The Boardroom
        </h1>
        </>
    )
}


export default Header;