import { useSearchFetch } from "../../../Api/useSearchFetch";
import AppNavbarSearch from "./AppNavbarSearch";
import AppNavbarBrand from "./AppNavbarBrand";
import AppNavbarLink from "./AppNavbarLink";
import { Navbar, Container } from "react-bootstrap";
import "./AppNavbar.css";

const AppNavbar = () => {
  const {
    data,
    searchKey,
    showBackground,
    handleSearchChange,
    handleSearchFocus,
    handleSearchBlur,
    handleLinkClick,
  } = useSearchFetch();

  return (
    <Navbar expand="lg" bg="warning" data-bs-theme="light">
      <Container>
        <AppNavbarBrand />
        <Navbar.Collapse id="basic-navbar-nav">
          <AppNavbarLink />
          <AppNavbarSearch
            searchKey={searchKey}
            handleSearchChange={handleSearchChange}
            handleSearchFocus={handleSearchFocus}
            handleSearchBlur={handleSearchBlur}
            showBackground={showBackground}
            data={data}
            handleLinkClick={handleLinkClick}
          />
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
