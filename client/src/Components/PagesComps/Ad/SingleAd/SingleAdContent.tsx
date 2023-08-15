import { SingleAdContentProps } from "../../../../utils/interfaces/singleAdContentProps";
import { Box, Button, Divider } from "@mui/material";

const SingleAdContent = ({
  title,
  salary,
  description,
  file_path,
}: SingleAdContentProps) => {
  return (
    <div className="row featurette">
      <div className="col-md-7 order-md-2">
        <h2 className="featurette-heading fw-normal lh-1">{title}</h2>
        <Divider />
        <p style={{ marginTop: "1rem" }}>
          <span style={{ fontWeight: "bold" }}>Atlyginimas po mokesčių:</span>
          &nbsp; {salary}€
        </p>
        <Divider />
        <div style={{ marginTop: "1rem" }}>
          <p style={{ fontWeight: "bold" }}>Darbo aprašymas:</p>
          <p>{description}</p>
          <Divider />
          <div style={{ marginTop: "1rem", marginBottom: "2rem" }}>
            <Button variant="contained" color="success">
              Siųsti CV
            </Button>
          </div>
        </div>
      </div>

      <div className="col-md-5 order-md-1">
        <Box
          className="img-fluid mx-auto"
          width="auto"
          height={260}
          style={{
            backgroundImage: `url(${"http://localhost:8000/" + file_path})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
      </div>
    </div>
  );
};

export default SingleAdContent;
