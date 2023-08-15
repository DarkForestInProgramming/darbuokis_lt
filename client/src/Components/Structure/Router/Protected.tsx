import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protected = (props: { Comp: React.ComponentType }) => {
  const navigate = useNavigate();
  const Comp = props.Comp;
  useEffect(() => {
    if (!localStorage.getItem("user-info")) {
      navigate("/login");
    }
  }, []);
  return (
    <div>
      <Comp />
    </div>
  );
};

export default Protected;
