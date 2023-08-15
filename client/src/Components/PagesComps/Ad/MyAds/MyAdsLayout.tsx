import { ReactNode } from "react";
import { Grid } from "@mui/material";

const MyAdsLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      sx={{ p: 2 }}
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Grid container direction="column" justifyContent="flex-start">
        {children}
      </Grid>
    </Grid>
  );
};

export default MyAdsLayout;
