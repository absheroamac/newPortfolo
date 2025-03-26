import { Typography } from "@mui/material";
import Image from "../../assets/item1.jpg";
import { Box } from "@mui/system";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const Slide = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        overflow: "hidden",
        position: "relative",
      }}
    >
      <img
        src={Image}
        alt="item1"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "20% 50%", // Adjust position as needed
          position: "absolute", // Fix: Make the image absolute
          top: 0,
          left: 0,
          zIndex: 1, // Image should be below the overlay
        }}
      />

      <div
        style={{
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2, // Gradient should be above the image
        }}
      ></div>
      <div
        style={{
          padding: "2rem",
          position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          gap: "1rem",
          boxSizing: "border-box",
        }}
      >
        <Box
          sx={{
            backgroundColor: "#61B6B6",
            padding: "1rem",
            paddingTop: "0.5rem",
            paddingBottom: "0.5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "2rem",
          }}
        >
          <Typography color="white">UI/UX Design</Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: "70%" }}>
            <Typography
              variant="h3"
              fontSize={"2.5rem"}
              color="white"
              textAlign={"left"}
            >
              A Seamless UX for Dex Platform
            </Typography>
          </Box>
          <Box
            sx={{
              backgroundColor: "white",
              borderRadius: "100%",
              width: "2.5rem",
              height: "2.5rem",
              textAlign: "center",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ArrowForwardRoundedIcon sx={{ color: "#F", fontSize: "1.5rem" }} />
          </Box>
        </Box>
      </div>
    </div>
  );
};

export default Slide;
