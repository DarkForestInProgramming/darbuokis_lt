import { Link } from "react-router-dom";
import { Button, Divider } from "@mui/material";

const LoginExtraSection = () => {
  return (
    <>
      <div style={{ marginTop: "16px" }}>
        <Divider>
          <small style={{ color: "green" }}> Neturite paskyros?</small>
        </Divider>
        <Link
          to="/register"
          style={{ textDecoration: "none", color: "#0000ee" }}
        >
          <Button
            variant="contained"
            style={{
              width: "100%",
              marginTop: "12px",
              height: "36px",
              backgroundColor: "#f1f1f1",
              color: "black",
              textTransform: "none",
            }}
          >
            Registruotis
          </Button>
        </Link>
      </div>
      <div style={{ marginTop: "30px" }}>
        <small>
          {" "}
          <span>
            Tęsiant, Jūs sutinkate su svetainės teisėmis ir privatumo politika
          </span>
        </small>
      </div>

      <div>
        <small>
          <Link to="/login" style={{ textDecoration: "none", color: "green" }}>
            {" "}
            Naudojimo sąlygos
          </Link>{" "}
          ir{" "}
          <Link to="/login" style={{ textDecoration: "none", color: "green" }}>
            Privatumo politika
          </Link>
        </small>
      </div>
    </>
  );
};

export default LoginExtraSection;
