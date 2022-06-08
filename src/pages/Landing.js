import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Footer } from "../components";

const Landing = () => {
  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        minHeight="70vh"
      >
        <Typography variant="h3" gutterBottom component="div">
          Coming soon!
        </Typography>
      </Box>

      <Footer />
    </Box>
  );
};

export default Landing;
