import { Nav } from "react-bootstrap";

const TopNavLinks = () => {
  return (
    <>
      <Nav.Link
        href="/login"
        className="p-2 ms-auto"
        style={{ fontSize: "14px" }}
      >
        Prisijungti
      </Nav.Link>

      <Nav.Link href="/register" className="p-2" style={{ fontSize: "14px" }}>
        Registruotis
      </Nav.Link>
    </>
  );
};

export default TopNavLinks;
