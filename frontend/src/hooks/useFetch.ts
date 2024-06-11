import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (address: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response: Response = await axios.get(address);
        setData(response);
      } catch (err) {
        console.error(err);
      }
      setLoading(false);
    };

    fetchData();
  }, [address]);

  return { data, loading };
};

export default useFetch;
