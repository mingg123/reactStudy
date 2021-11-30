import axios from "axios";

export const getPostAPI = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
export const getUsersAPI = (id) =>
  axios.get(`https://jsonplaceholder.typicode.com/users`);
