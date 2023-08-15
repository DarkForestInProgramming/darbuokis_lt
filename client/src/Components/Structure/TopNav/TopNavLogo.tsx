import { Link } from "react-router-dom";

const TopNavLogo = () => {
  return (
    <>
      <div className="p-2">
        <Link to="/">
          <img src="https://res.cloudinary.com/dp0m5mp1s/image/upload/v1691859637/Darbuokis.lt/darbuokis_logo_muzvic.png" />
        </Link>
      </div>
      <div style={{ fontSize: "12px", color: "green" }}>
        Susirask darbą greičiau
      </div>
    </>
  );
};

export default TopNavLogo;
