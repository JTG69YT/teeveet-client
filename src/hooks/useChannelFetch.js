import { useState, useEffect } from "react";
import API from "../API";

export const useChannelFetch = () => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchChannel = async () => {
    try {
      setLoading(true);
      setError(false);

      const channel = await API.fetchChannels();

      setState(channel)
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchChannel();
  }, []);

  return { state, loading, error };
};
