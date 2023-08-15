import { AiOutlineHome } from "react-icons/ai";
import { Nav } from "react-bootstrap";

const AppNavbarLink = () => {
  return (
    <Nav className="me-auto">
      <Nav.Link href="/" style={{ fontWeight: "bold" }}>
        <AiOutlineHome size={20} className="navbarLink__icon" />
        Titulinis
      </Nav.Link>
    </Nav>
  );
};

export default AppNavbarLink;
