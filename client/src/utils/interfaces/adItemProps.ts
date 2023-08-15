import { ad } from "./ad";

export interface AdItemProps {
  ad: ad;
  onDelete: (id: string) => void;
}
