import { Box } from "@mui/material";
import Hero from "./Hero";
import ExperienceCard from "./Cards/ExperienceCard";
import Slider from "./Slider";

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
          sx={{
            backgroundColor: "#1D1F2B",
            borderRadius: "2rem",
            overflow: "hidden",
          }}
        >
          <ExperienceCard />
        </Box>
        <Box
          width={"30%"}
          height={"100%"}
          sx={{
            backgroundColor: "#1D1F2B",
            borderRadius: "2rem",
            overflow: "hidden",
          }}
        >
          <ExperienceCard />
        </Box>
        <Box
          width={"40%"}
          height={"100%"}
          sx={{ backgroundColor: "#1D1F2B", borderRadius: "2rem" }}
        >
          <Slider />
        </Box>
      </Box>
    </Box>
  );
};

export default Landing;
