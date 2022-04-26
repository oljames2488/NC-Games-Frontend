import './App.css';
import { useState } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { UserContext } from './contexts/User';
import Header from './components/Header';
import Nav from './components/Nav';
import Reviews from './components/Reviews';
import ReviewCard from './components/ReviewCard';
import Users from './components/Users';
import PostNewReview from './components/PostNewReview';

function App() {
  const [loggedInUser, setLoggedInUser] = useState({
    username: 'jessjelly',
    avatar_url:
      'https://vignette.wikia.nocookie.net/mrmen/images/4…MR_JELLY_4A.jpg/revision/latest?cb=20180104121141',
  });

  return (
    <UserContext.Provider value={{ loggedInUser, setLoggedInUser }}>
      <BrowserRouter>
        <div className="App">
          <Header />
          <Nav />
          <Routes>
            <Route path="/" element={<Reviews />}></Route>
            <Route path="/category/:category_slug" element={<Reviews />}></Route>
            <Route path="/reviews/:review_id" element={<ReviewCard />}></Route>
            <Route path="/users" element={<Users />}></Route>
            <Route path="/reviews/post-review" element={<PostNewReview />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
}

export default App;
