import axios from 'axios';

const gamesApi = axios.create({
  baseURL: 'https://the-boardroom.herokuapp.com/api',
});

export const getCategories = () => {
  return gamesApi.get('/categories').then(({ data }) => {
    return data.categories;
  });
};

export const getReviews = (category_slug) => {
  // let path = '/reviews';
  // if (category_slug) path += `?category=${category_slug}`;

  return gamesApi.get('/reviews', { params: { category: category_slug } }).then(({ data }) => {
    console.log(data.reviews);
    return data.reviews;
  });
};

export const getSingleReview = (review_id) => {
  return gamesApi.get(`/reviews/${review_id}`).then(({ data }) => {
    console.log(data.reviews);
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
    console.log(data);
    return data;
  });
};

export const patchReviewKudos = (review_id) => {
  return gamesApi.patch(`/reviews/${review_id}`, { kudos_inc: 1 }).then((res) => {
    console.log(res.data);
    return res.data;
  });
};
