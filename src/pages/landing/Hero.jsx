import { Box, Stack, Typography } from "@mui/material";
import Background from "../../assets/background.jpg";
import HeroImage from "./HeroImage";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        width: "100%",
        height: "65%",
        padding: "6rem",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      {/* Container */}

      <Stack
        sx={{
          justifyContent: "flex-start",
          alignItems: "flex-start",
          alignContent: "center",
          width: "60%",
        }}
      >
        <Box display={"flex"} gap={"2rem"} width={"100%"}>
          <Typography fontSize={"1.5rem"}>Full Stack Engineer</Typography>
          <Typography fontSize={"1.5rem"}>Absher K</Typography>
        </Box>
        <Typography variant="h1" textAlign={"left"}>
          Looking Beyond <br />
          Limit
        </Typography>
      </Stack>
      <Box width={"40%"}>
        <HeroImage />
      </Box>
    </Box>
  );
};

export default Hero;
