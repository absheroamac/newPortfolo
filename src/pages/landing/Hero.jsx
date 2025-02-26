import { Box, Stack, Typography } from "@mui/material";
import Background from "../../assets/background.jpg";
import HeroImage from "./HeroImage";
import Button from "../../components/Button";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import "./Hero.css";

const Hero = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "60%",
        paddingBottom: "0px",
        display: "flex",
        justifyContent: "space-between",
        borderRadius: "2rem",
      }}
    >
      {/* Container */}
      <Stack
        sx={{
          justifyContent: "space-between",
          alignItems: "flex-start",
          alignContent: "center",
          width: "60%",
          padding: "6rem",
        }}
      >
        <Box>
          <Box
            display={"flex"}
            gap={"2rem"}
            width={"100%"}
            alignItems={"center"}
          >
            <Typography fontSize={"1.5rem"}>Full Stack Engineer</Typography>
            <div
              style={{
                width: "7px",
                height: "7px",
                backgroundColor: "#101322",
                borderRadius: "100%",
              }}
            ></div>
            <Typography className="sci-fi-text" fontSize={"1.5rem"}>
              Absher K
            </Typography>
            <Box
              sx={{
                backgroundColor: "#F",
                borderRadius: "100%",
                width: "2rem",
                height: "2rem",
                textAlign: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                border: "0.5px solid #101322",
              }}
            >
              <ArrowForwardRoundedIcon
                sx={{ color: "#101322", fontSize: "1rem" }}
              />
            </Box>
          </Box>

          <Typography variant="h1" fontSize={80} mt={2} textAlign={"left"}>
            Looking Beyond <br />
            The Limit
          </Typography>
        </Box>
        <Box>
          <Button />
        </Box>
      </Stack>
      <Box width={"40%"}>
        <HeroImage />
      </Box>
    </Box>
  );
};

export default Hero;
