import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Footer } from "../components";

const Landing = () => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      minHeight="100vh"
      textAlign="center"
    >
      <Typography variant="h3" gutterBottom component="div" sx={{ mt: 25 }}>
        Coming soon!
      </Typography>

      <Footer />
    </Box>
  );
};

export default Landing;
