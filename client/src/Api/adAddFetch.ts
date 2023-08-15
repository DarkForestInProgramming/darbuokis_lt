import { ChangeEvent, useState } from "react";
import axios from "axios";

const AdAddFetch = () => {
  const [title, setTitle] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [salary, setSalary] = useState<string>("");
  const [description, setDescription] = useState<string>("");

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files && e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };

  const addAd = async () => {
    if (
      title.length >= 3 &&
      salary.length >= 3 &&
      description.length >= 3 &&
      file
    ) {
      const formData = new FormData();
      formData.append("title", title);

      if (file) {
        formData.append("file", file);
      }

      formData.append("salary", salary);
      formData.append("description", description);

      try {
        const response = await axios.post(
          "http://localhost:8000/api/addAd",
          formData
        );
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } catch (error) {}
    }
  };

  return {
    file,
    setFile,
    title,
    setTitle,
    salary,
    setSalary,
    description,
    setDescription,
    handleFileChange,
    addAd,
  };
};

export default AdAddFetch;
