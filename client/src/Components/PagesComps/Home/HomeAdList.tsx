import { Link } from "react-router-dom";
import { AdListProps } from "../../../utils/interfaces/adListProps";

const HomeAdList = ({ ads }: AdListProps) => {
  return (
    <div className="album py-1 bg-light">
      <div>
        <p className="can__interest">Naujausi darbo skelbimai</p>
        {ads
          .reverse()
          .slice(0, 5)
          .map((ad) => (
            <div key={ad.id} className="img__container">
              <Link to={`/ad/${ad.id}`}>
                <div className="img__content-container">
                  <img
                    className="img__content"
                    src={"http://localhost:8000/" + ad.file_path}
                    alt={ad.title}
                  />
                  <p className="img__text">{ad.title}</p>
                </div>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default HomeAdList;
