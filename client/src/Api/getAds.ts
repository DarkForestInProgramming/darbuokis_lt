import { useState, useEffect } from "react";
import axios from "axios";
import { ad } from "../utils/interfaces/ad";

export const useFetchAds = () => {
  const [data, setData] = useState<ad[]>([]);

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/ads");
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};
