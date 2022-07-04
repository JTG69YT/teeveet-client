import {
  HOME_BASE_URL,
  CHANNEL_BASE_URL
} from './config';

const apiSettings = {
  fetchChannels: async () => {
    const endpoint = `${HOME_BASE_URL}`;
    return await (await fetch(endpoint)).json();
  },
  fetchChannel: async (channelId) => {
    const endpoint = `${CHANNEL_BASE_URL}${channelId}&user_id=1`;
    return await (await fetch(endpoint)).json();
  }
};

export default apiSettings;
