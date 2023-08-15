import { SingleAdPageMainProps } from "../../../../utils/interfaces/singleAdPageMainProp";
import SingleAdHeader from "./SingleAdHeader";
import SingleAdContent from "./SingleAdContent";
import { Container, LinearProgress } from "@mui/material";

const SingleAdPageMain = ({ ad }: SingleAdPageMainProps) => {
  if (!ad) {
    return (
      <div className="main__div">
        <LinearProgress />
      </div>
    );
  }

  const { title, description, file_path, salary } = ad;

  return (
    <>
      <SingleAdHeader title="Laisvos darbo vietos peržiūra" />
      <Container style={{ marginTop: "3rem", marginBottom: "3rem" }}>
        <SingleAdContent
          title={title}
          salary={salary}
          description={description}
          file_path={file_path}
        />
      </Container>
    </>
  );
};

export default SingleAdPageMain;
