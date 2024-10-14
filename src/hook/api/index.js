import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const useApiRequest = (url, method = "GET") => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        toast.info("Loading...", { autoClose: false, toastId: "loading" });

        const response = await fetch(url, { method });
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const res = await response.json();
        setData(res?.results);
        toast.dismiss("loading");
        toast.success("Data fetched successfully");
      } catch (err) {
        setError(err.message);
        toast.dismiss("loading");
        toast.error(`Error: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url, method]);

  return { data, loading, error };
};

export default useApiRequest;
