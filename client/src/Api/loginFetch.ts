import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginFetch = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (localStorage.getItem("user-info")) {
      navigate("/add");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }, []);

  const handleLoginSubmit = async () => {
    if (email.length > 0 && password.length > 0) {
      const userCredentials = { email, password };
      try {
        const response = await axios.post(
          "http://localhost:8000/api/login",
          userCredentials,
          {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          }
        );

        const result = response.data;

        if ("error" in result) {
          console.log(result.error);
          alert(result.error);
        } else {
          localStorage.setItem("user-info", JSON.stringify(result));
          navigate("/add");
        }
      } catch (error) {
        console.error("Error during login:", error);
      }
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleLoginSubmit,
  };
};

export default LoginFetch;
