import { Box, Typography } from "@mui/material";
import PropTypes from "prop-types";
import { container } from "webpack";

const SkillBubble = ({ Icon, skillName }) => {
  const defaultStyle = {
    icon: {
      fill: "white",
      opacity: "50%",
    },
  };

  return (
    <Box sx={defaultStyle.container}>
      <Icon style={defaultStyle.icon} />
      <Typography>{skillName}</Typography>
    </Box>
  );
};

export default SkillBubble;
