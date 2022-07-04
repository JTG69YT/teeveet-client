const API_URL = `https://jesunmaailma.ml/teeveet-cms/api/v1/api.php`;
const API_KEY = process.env.REACT_APP_API_KEY;

const HOME_BASE_URL = `${API_URL}?api_key=${API_KEY}&channels=all&user_id=1`;
const CHANNEL_BASE_URL = `${API_URL}?api_key=${API_KEY}&getChannelById=`;

export {
  HOME_BASE_URL,
  CHANNEL_BASE_URL,
  API_URL,
  API_KEY,
};
