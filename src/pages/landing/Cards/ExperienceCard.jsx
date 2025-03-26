import { Box, Stack, Typography } from "@mui/material";
import SkillBubble from "../../../components/SkillBubble";
import ReactIcon from "../../../assets/react.svg?react";
import HorizontalScroller from "../../../components/HorizontalScroller";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";

const skills = [
  { icon: ReactIcon, name: "React" },
  { icon: ReactIcon, name: "React" },
  { icon: ReactIcon, name: "React" },
  { icon: ReactIcon, name: "React" },
  { icon: ReactIcon, name: "React" },
];

const ExperienceCard = () => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          flexDirection: "column",
          alignItems: "flex-start",
          padding: "2rem",
        }}
      >
        <Typography variant="h6" fontSize={"1.6rem"} color="white">
          Full Stack Developer
        </Typography>
      </Box>
      <Box>
        <HorizontalScroller skills={skills} />
      </Box>
      <Box
        sx={{
          padding: "2rem",
          paddingTop: "0.5rem",
        }}
      >
        <hr style={{ opacity: "8%" }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            <Typography color="white" fontSize={"3rem"}>
              2+
            </Typography>
            <Stack
              sx={{ justifyContent: "flex-start", alignItems: "flex-start" }}
            >
              <Typography fontSize={"1.5rem"} color="white">
                Years of Experience
              </Typography>
              <Typography sx={{ opacity: "50%" }} color="white">
                Spearmint Technologies
              </Typography>
            </Stack>
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
      </Box>
    </Box>
  );
};

export default ExperienceCard;
