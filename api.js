const axios = require("axios");

const BASE_URL = "https://jsonplaceholder.typicode.com";

const getUsers = async () => await axios.get(`${BASE_URL}/users`)
const getPosts = async () => await axios.get(`${BASE_URL}/posts`);
const getComments = async () => await axios.get(`${BASE_URL}/comments`);
const getPhotos = async () => await axios.get(`${BASE_URL}/photos`);
const getTodos = async () => await axios.get(`${BASE_URL}/todos`);

module.exports = {
  getUsers,
  getPosts,
  getComments,
  getPhotos,
  getTodos,
};
