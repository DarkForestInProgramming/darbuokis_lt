import { ReactNode } from "react";
import { Box, Grid } from "@mui/material";

const AuthLayout = ({ children }: { children: ReactNode }) => {
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
          width: "350px",
          marginTop: 3,
          backgroundColor: "white",
        }}
      >
        {children}
      </Box>
    </Grid>
  );
};

export default AuthLayout;
