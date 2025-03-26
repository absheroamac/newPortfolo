import { Box, Typography } from "@mui/material";
import { useState } from "react";

const SkillBubble = ({ Icon, skillName, iconStyle }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <Box
      onMouseEnter={handleHover}
      onMouseLeave={handleMouseLeave}
      sx={{
        background: isHovered
          ? "linear-gradient(253.02deg, #BED8E2 -63.1%, #E3ECFC 60.95%)"
          : "#292B3B",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "1.5rem",
        padding: "1.5rem",
        transition: "background 1s ease-in-out, width 1s ease, height 1s ease",
      }}
    >
      <Box>
        <Icon
          style={{
            ...iconStyle,
            fill: isHovered ? "#45474C" : "white",
            opacity: "50%",
            transition: "fill 0.5s ease-in-out",
            width: "25px",
            height: "auto",
          }}
        />
      </Box>
      <Typography
        color="black"
        fontSize={"1rem"}
        sx={{
          display: isHovered ? "inlineBlock" : "none",
          transition: "display 0.3s ease-in-out",
        }}
      >
        {skillName}
      </Typography>
    </Box>
  );
};

export default SkillBubble;
