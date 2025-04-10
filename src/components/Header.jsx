import { Box, Container, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <header>
      <Container
        sx={{
          display: "flex",
          justifyContent: "space-between",
          padding: "1rem 0rem",
          marginTop: "0px",
        }}
      >
        <Box sx={{ display: "flex", gap: "2rem" }}>
          <a>
            <Typography>Articles</Typography>
          </a>
          <a>
            <Typography>Portfolio</Typography>
          </a>
          <a>
            <Typography>Experience</Typography>
          </a>
        </Box>
        <Box>
          <a>
            <Typography>Experience</Typography>
          </a>
        </Box>
      </Container>
    </header>
  );
};

export default Header;
