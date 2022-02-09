import React from 'react';
import {Link} from 'react-router-dom';


const Header = ()  => {
    return (
        <>
        <Link className='App-Header' to="/"><img width="50px" height="50px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlZac3pzaViD1cvpt2QccKZVbuj4_Mf75bKg&usqp=CAU" alt='Logo'/></Link>
        <h1>
            The Boardroom
        </h1>
        </>
    )
}


export default Header;