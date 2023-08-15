import axios from "axios";
import { useFetchAds } from "../../../../Api/getAds";
import MyAdsTable from "./MyAdsTable";
import MyAdsLayout from "./MyAdsLayout";
import MyAdsHeader from "./MyAdsHeader";

const MyAdsPageMain = () => {
  const data = useFetchAds();

  const deleteAd = async (id: string) => {
    axios.delete("http://localhost:8000/api/delete/" + id);
    // fetchData();
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  };

  return (
    <MyAdsLayout>
      <MyAdsHeader />
      <h1>Sąrašas</h1>
      <MyAdsTable ads={data} onDeleteAd={deleteAd} />
    </MyAdsLayout>
  );
};

export default MyAdsPageMain;
