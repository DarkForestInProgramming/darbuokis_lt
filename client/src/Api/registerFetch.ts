import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterFetch = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, []);

  const handleRegisterSubmit = async () => {
    if (name.length > 0 && email.length > 0 && password.length > 0) {
      const item = { name, email, password };
      try {
        const response = await axios.post(
          "http://localhost:8000/api/register",
          item,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );
        const result = response.data;
        localStorage.setItem("user-info", JSON.stringify(result));
        navigate("/add");
      } catch (error) {
        console.error("Error submitting registration:", error);
      }
    } else {
      console.log("Please fill in all fields.");
    }
  };
  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    handleRegisterSubmit,
  };
};

export default RegisterFetch;
