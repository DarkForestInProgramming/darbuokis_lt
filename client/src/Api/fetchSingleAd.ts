import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { FetchSingleAdProps } from "../utils/interfaces/fetchSingleAdProps";

const FetchSingleAd = ({ children }: FetchSingleAdProps) => {
  const { id } = useParams<{ id: string }>();
  const [ad, setAd] = useState<any>(null);

  useEffect(() => {
    const fetchAd = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/ad/${id}`);
        setAd(response.data);
      } catch (error) {
        console.error("Error fetching ad:", error);
      }
    };

    fetchAd();
  }, [id]);

  return children(ad);
};

export default FetchSingleAd;
