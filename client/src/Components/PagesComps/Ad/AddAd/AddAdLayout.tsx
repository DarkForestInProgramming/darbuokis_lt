import { ReactNode } from "react";
import { Box, Grid } from "@mui/material";

const AddAdLayout = ({ children }: { children: ReactNode }) => {
  return (
    <Grid
      sx={{ p: 2 }}
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
    >
      <Box
        sx={{
          padding: 2,
          marginTop: 3,
          backgroundColor: "white",
        }}
      >
        <Grid container direction="column" justifyContent="flex-start">
          {children}
        </Grid>
      </Box>
    </Grid>
  );
};

export default AddAdLayout;
