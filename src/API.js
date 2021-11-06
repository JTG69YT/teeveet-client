import {
  HOME_BASE_URL,
} from './config';

const apiSettings = {
  fetchChannels: async () => {
    const endpoint = `${HOME_BASE_URL}`;
    return await (await fetch(endpoint)).json();
  }
};

export default apiSettings;
