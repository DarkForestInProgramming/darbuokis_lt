import { useState, ChangeEvent } from "react";
import axios from "axios";
import { ad } from "../utils/interfaces/ad";

export const useSearchFetch = () => {
  const [data, setData] = useState<ad[]>([]);
  const [searchKey, setSearchKey] = useState("");
  const [showBackground, setShowBackground] = useState(false);
  let blurTimeout: ReturnType<typeof setTimeout>;

  const searchAd = async (key: string) => {
    try {
      const response = await axios.get<ad[]>(
        `http://localhost:8000/api/search/${key}`
      );
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const key = event.target.value;
    setSearchKey(key);
    searchAd(key);
  };

  const handleSearchFocus = () => {
    clearTimeout(blurTimeout); // Clear the timeout
    setShowBackground(true);
  };

  const handleSearchBlur = () => {
    blurTimeout = setTimeout(() => {
      setShowBackground(false);
    }, 1000);
  };

  const handleLinkClick = () => {
    clearTimeout(blurTimeout);
  };

  return {
    data,
    searchKey,
    showBackground,
    handleSearchChange,
    handleSearchFocus,
    handleSearchBlur,
    handleLinkClick,
  };
};
