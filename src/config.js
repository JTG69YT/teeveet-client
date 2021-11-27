// Configuration for TMDB API
// Read more about the API here: https://developers.themoviedb.org/

const API_URL = `http://jesunmaailma.tk/livetv-cms/api/v1/api.php`;
const API_KEY = process.env.REACT_APP_API_KEY;

const HOME_BASE_URL = `${API_URL}?api_key=${API_KEY}&channels=all&user_id=1`;

export {
  HOME_BASE_URL,
  API_URL,
  API_KEY,
};
