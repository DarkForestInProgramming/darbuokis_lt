import { ad } from "./ad";

export interface MyAdsTableProps {
  ads: ad[];
  onDeleteAd: (id: string) => void;
}
