import ReactTyped from "react-typed";
import { Button } from "@mui/material";
import { Navbar } from "react-bootstrap";

const AppNavbarBrand = () => {
  return (
    <>
      <Navbar.Brand href="/add">
        <Button size="small" variant="contained" color="success">
          <ReactTyped
            strings={["Rask Darbuotojų", " + Talpinti Skelbimą"]}
            typeSpeed={50}
            backSpeed={50}
            loopCount={200}
          />
        </Button>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </>
  );
};

export default AppNavbarBrand;
