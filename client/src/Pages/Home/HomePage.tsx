import { useFetchAds } from "../../Api/getAds";
import { compLogos } from "../../utils/companiesLogos";
import HomeAdList from "../../Components/PagesComps/Home/HomeAdList";
import HomeDivider from "../../Components/PagesComps/Home/HomeDivider";
import "./HomePage.css";

const HomePage = () => {
  const data = useFetchAds();
  return (
    <div>
      <div>
        <HomeAdList ads={data} />
        <HomeDivider />
        <div className="scroll-container">
          {compLogos.map((compLogo) => (
            <img
              key={compLogo.id}
              src={compLogo.imgUrl}
              alt={compLogo.compName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
