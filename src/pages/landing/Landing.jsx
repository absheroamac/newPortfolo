import { Box } from "@mui/material";
import Hero from "./Hero";

const Landing = () => {
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      padding={"1rem"}
      sx={{ backgroundColor: "#101322" }}
    >
      <Hero />
    </Box>
  );
};

export default Landing;
