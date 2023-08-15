import { useNavigate } from "react-router-dom";
import TopNavLinks from "./TopNavLinks";
import TopNavDropItems from "./TopNavDropItems";
import TopNavLogo from "./TopNavLogo";
import Avatar from "react-avatar";
import { NavDropdown, Stack } from "react-bootstrap";
import "./TopNav.css";

const TopNav = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user-info");
  const userData = user ? JSON.parse(user) : null;

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <Stack direction="horizontal" gap={3}>
        <TopNavLogo />
        {localStorage.getItem("user-info") ? (
          <>
            <NavDropdown
              className="p-2 ms-auto"
              title={<Avatar name={userData && userData.name} size="35px" />}
            >
              <TopNavDropItems logOut={logOut} />
            </NavDropdown>
          </>
        ) : (
          <>
            <TopNavLinks />
          </>
        )}
      </Stack>
    </>
  );
};

export default TopNav;
