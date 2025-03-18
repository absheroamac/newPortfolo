import { Box, Typography } from "@mui/material";
import SkillBubble from "../../../components/SkillBubble";
import ReactIcon from "../../../assets/react.svg";

const ExperienceCard = () => {
  return (
    <Box width={"100%"} height={"100%"}>
      <Typography variant="h3" fontSize={"2rem"}>
        Full Stack Developer
      </Typography>
      <Box>
        <Typography>2+</Typography>
        <Box>
          <Typography>Years of Experience</Typography>
          <Typography>Spearmint Technologies</Typography>
        </Box>
        <SkillBubble Icon={ReactIcon} skillName="React" />
      </Box>
    </Box>
  );
};

export default ExperienceCard;
