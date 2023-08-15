import AdItem from "./AdItem";
import { MyAdsTableProps } from "../../../../utils/interfaces/myAdsTableProps";
import { Table } from "react-bootstrap";

const MyAdsTable = ({ ads, onDeleteAd }: MyAdsTableProps) => {
  return (
    <Table hover responsive="sm">
      <thead>
        <tr>
          <th>Pavadinimas</th>
          <th>Paveikslėlis</th>
          <th>Veiksmai</th>
        </tr>
      </thead>
      {ads.map((ad) => (
        <AdItem key={ad.id} ad={ad} onDelete={onDeleteAd} />
      ))}
    </Table>
  );
};

export default MyAdsTable;
