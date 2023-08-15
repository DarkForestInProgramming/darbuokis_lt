import { Link } from "react-router-dom";
import { Divider } from "@mui/material";

const RegisterExtraSection = () => {
  return (
    <>
      <div style={{ marginTop: "30px" }}>
        <small>
          {" "}
          <span>
            Sukuriant paskyrą, Jūs sutinkate su svetainės teisėmis ir privatumo
            politika
          </span>
        </small>
      </div>

      <div>
        <small>
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "green" }}
          >
            {" "}
            Naudojimo salygos
          </Link>{" "}
          ir{" "}
          <Link
            to="/register"
            style={{ textDecoration: "none", color: "green" }}
          >
            Privatumo politika
          </Link>
        </small>
      </div>

      <Divider sx={{ marginTop: "36px", marginBottom: "36px" }} />

      <div>
        <small>
          Jau turite paskyrą?{" "}
          <Link to="/login" style={{ textDecoration: "none", color: "green" }}>
            Prisijungti
          </Link>
        </small>
      </div>
    </>
  );
};

export default RegisterExtraSection;
