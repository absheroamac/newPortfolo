import { Box } from "@mui/material";
import Hero from "./Hero";
import ExperienceCard from "./Cards/ExperienceCard";

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
          width={"40%"}
          height={"100%"}
          sx={{ backgroundColor: "#1D1F2B", borderRadius: "2rem" }}
        ></Box>
        <Box
          width={"30%"}
          height={"100%"}
          sx={{ backgroundColor: "#1D1F2B", borderRadius: "2rem" }}
        >
          <ExperienceCard />
        </Box>
        <Box
          width={"30%"}
          height={"100%"}
          sx={{ backgroundColor: "#1D1F2B", borderRadius: "2rem" }}
        ></Box>
      </Box>
    </Box>
  );
};

export default Landing;
