import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://the-boardroom.herokuapp.com/api',
});

export const getCategories = () => {
  return gamesApi.get('/categories').then(({ data }) => {
    return data.categories;
  });
};

export const getReviews = (category_slug, orderBy, sortBy) => {
  // let path = '/reviews';
  // if (category_slug) path += `?category=${category_slug}`;
  const query = {
    category: category_slug,
    order: orderBy,
    sort_by: sortBy,
  };

  for (const key of Object.keys(query)) {
    if (query[key] === '' || query[key] === undefined) {
      delete query[key];
    }
  }

  return gamesApi.get('/reviews', { params: query }).then(({ data }) => {
    return data.reviews;
  });
};

export const getSingleReview = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then(({ data }) => {
    return data.reviews;
  });
};

export const getReviewComments = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}/comments`).then(({ data }) => {
    return data;
  });
};

export const getAllUsers = () => {
  return gamesApi.get(`/users`).then(({ data }) => {
    return data;
  });
};

export const patchReviewKudos = (review_id, change) => {
  return gamesApi.patch(`/reviews/${review_id}`, { inc_votes: change }).then((res) => {
    return res.data;
  });
};

export const postNewComment = (postedComment, review_id) => {
  return gamesApi.post(`/reviews/${review_id}/comments`, postedComment).then((res) => {
    return res.data;
  });
};

export const postNewReview = (postedReview) => {
  console.log(postedReview);
  return gamesApi.post(`/reviews`, postedReview).then((res) => {
    console.log(res.data);
    return res.data;
  });
};

export const deleteUserComment = (comment_id) => {
  console.log(comment_id);
  return gamesApi.delete(`/comments/${comment_id}`).catch((err) => {
    console.log(err);
  });
};
