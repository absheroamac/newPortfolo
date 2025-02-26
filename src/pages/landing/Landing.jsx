import { Box } from "@mui/material";
import Hero from "./Hero";
import DeveloperCard from "./Cards/DeveloperCard";

const Landing = () => {
  return (
    <Box
      width={"100vw"}
      height={"100vh"}
      padding={"1rem"}
      sx={{ backgroundColor: "#101322" }}
    >
      <Hero />

      <Box
        width={"100%"}
        height={"40%"}
        sx={{ display: "flex", gap: "1rem", paddingTop: "1rem" }}
      >
        <Box
          width={"30%"}
          height={"100%"}
          sx={{ backgroundColor: "white", borderRadius: "2rem" }}
        >
          <DeveloperCard />
        </Box>
        <Box
          width={"30%"}
          height={"100%"}
          sx={{ backgroundColor: "white", borderRadius: "2rem" }}
        ></Box>
        <Box
          width={"40%"}
          height={"100%"}
          sx={{ backgroundColor: "white", borderRadius: "2rem" }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Landing;
