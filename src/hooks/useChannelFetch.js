import { useState, useEffect } from "react";
import API from "../API";

export const useChannelFetch = (channelId) => {
  const [state, setState] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchChannel = async () => {
    try {
      setLoading(true);
      setError(false);

      const channel = await API.fetchChannel(channelId);

      setState(channel)
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchChannel();
  }, [channelId]);

  return { state, loading, error };
};
