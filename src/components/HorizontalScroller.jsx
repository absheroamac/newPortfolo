import { Box } from "@mui/material";
import React from "react";
import SkillBubble from "./SkillBubble";
import style from "./HorizontalScrollet.module.css";

const HorizontalScroller = ({ skills }) => {
  return (
    <Box className={style.bannerContainer}>
      <div className={style.bannerTrack}>
        {[...skills, ...skills].map((skill, index) => (
          <div className={style.item} key={index}>
            <SkillBubble Icon={skill.icon} skillName={skill.name} />
          </div>
        ))}
      </div>
    </Box>
  );
};

export default HorizontalScroller;
