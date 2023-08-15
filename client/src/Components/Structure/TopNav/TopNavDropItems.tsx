import { TopNavDropItemsProps } from "../../../utils/interfaces/topNavDropItemsProps";
import { BiSpreadsheet } from "react-icons/bi";
import { BsPersonAdd } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";
import { NavDropdown } from "react-bootstrap";

const TopNavDropItems = ({ logOut }: TopNavDropItemsProps) => {
  return (
    <>
      <NavDropdown.Item href="/add" className="dropdown__item">
        <BsPersonAdd className="dropdown__icon" />
        Įkelti skelbimą
      </NavDropdown.Item>
      <NavDropdown.Item href="/myads" className="dropdown__item">
        <BiSpreadsheet className="dropdown__icon" />
        Mano skelbimai
      </NavDropdown.Item>
      <NavDropdown.Item onClick={logOut} className="dropdown__item">
        <FaSignOutAlt className="dropdown__icon" />
        Atsijungti
      </NavDropdown.Item>
    </>
  );
};

export default TopNavDropItems;
