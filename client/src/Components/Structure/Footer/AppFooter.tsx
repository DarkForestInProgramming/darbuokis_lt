import { Link } from "react-router-dom";

const AppFooter = () => {
  return (
    <div className="container">
      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted" style={{ fontSize: "14px" }}>
          Visos teisės saugomos &copy; Deividas Šipelis, 2023
        </p>

        <Link
          to="/"
          className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
        >
          <img src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1691859637/Darbuokis.lt/darbuokis_logo_muzvic.png" />
        </Link>

        <ul className="nav col-md-4 justify-content-end">
          <li className="nav-item">
            <Link
              to="/"
              className="nav-link px-2 text-muted"
              style={{ fontSize: "14px" }}
            >
              Titulinis
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/add"
              className="nav-link px-2 text-muted"
              style={{ fontSize: "14px" }}
            >
              Skelbimo talpinimas
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
};

export default AppFooter;
