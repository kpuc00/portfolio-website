import * as React from "react";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Divider,
  Link,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Footer = () => {
  return (
    <Box
      component="footer"
      textAlign="center"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: (theme) =>
          theme.palette.mode === "light"
            ? theme.palette.grey[200]
            : theme.palette.grey[800],
      }}
    >
      <Container maxWidth="sm">
        <Typography variant="body1" color="text.secondary">
          Reach me at:
        </Typography>

        <IconButton
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/kristiyan-strahilov/"
        >
          <LinkedInIcon />
        </IconButton>

        <IconButton aria-label="GitHub" href="https://github.com/kpuc00">
          <GitHubIcon />
        </IconButton>

        <Divider light sx={{ m: 1 }} />

        <Typography variant="body2" color="text.secondary">
          ©{" "}
          <Link
            href="https://kstrahilov.dev/"
            underline="hover"
            color="inherit"
          >
            Kristiyan Strahilov
          </Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      </Container>
    </Box>
  );
};
export default Footer;
