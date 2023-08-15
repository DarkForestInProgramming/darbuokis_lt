import { ChangeEvent } from "react";
import { ad } from "./ad";

export interface AppNavbarSearchProps {
  searchKey: string;
  handleSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
  handleSearchFocus: () => void;
  handleSearchBlur: () => void;
  showBackground: boolean;
  data: ad[];
  handleLinkClick: () => void;
}
