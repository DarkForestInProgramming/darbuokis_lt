import { SingleAdHeaderProps } from "../../../../utils/interfaces/singleAdHeaderProps";
import { Divider } from "@mui/material";

const SingleAdHeader: React.FC<SingleAdHeaderProps> = ({ title }) => {
  return (
    <div style={{ marginTop: "1rem" }}>
      <h5>{title}</h5>
      <Divider />
    </div>
  );
};

export default SingleAdHeader;
