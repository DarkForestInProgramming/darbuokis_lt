import { Link } from "react-router-dom";
import { AppNavbarSearchProps } from "../../../utils/interfaces/appNavbarSearchProps";
import { Form, Nav } from "react-bootstrap";

const AppNavbarSearch = ({
  searchKey,
  handleSearchChange,
  handleSearchFocus,
  handleSearchBlur,
  showBackground,
  data,
  handleLinkClick,
}: AppNavbarSearchProps) => (
  <Nav>
    <div className="search__main">
      <Form>
        <Form.Control
          type="text"
          placeholder="Ieškoti"
          className="mr-sm-2"
          value={searchKey}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
          style={{ width: "320px" }}
        />
      </Form>
      {showBackground && (
        <div className="search__results__block">
          {data.map((ad) => (
            <div key={ad.id} className="search__results">
              <Link to={`/ad/${ad.id}`} onClick={handleLinkClick}>
                <img
                  className="search__result__pic"
                  src={"http://localhost:8000/" + ad.file_path}
                />
              </Link>
              {ad.title}
            </div>
          ))}
        </div>
      )}
    </div>
  </Nav>
);

export default AppNavbarSearch;
