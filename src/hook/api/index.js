import { useState, useEffect } from "react";

const useApiRequest = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url, { method });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const res = await response.json();

        setData(res);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method]);

  return { data, loading, error };
};

export default useApiRequest;
