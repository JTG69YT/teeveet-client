import { useState, useEffect } from 'react';
import API from '../API';

export const useHomeFetch = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchChannels = async () => {
    try {
      setError(false);
      setLoading(true);

      const channels = await API.fetchChannels();

      setState(channels);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Search and initial
  useEffect(() => {
    fetchChannels();
  }, []);

  return { state, loading, error };
};
