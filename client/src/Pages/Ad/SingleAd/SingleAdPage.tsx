import FetchSingleAd from "../../../Api/fetchSingleAd";
import SingleAdPageMain from "../../../Components/PagesComps/Ad/SingleAd/SingleAdPageMain";

const SingleAdPage = () => {
  return <FetchSingleAd>{(ad) => <SingleAdPageMain ad={ad} />}</FetchSingleAd>;
};

export default SingleAdPage;
