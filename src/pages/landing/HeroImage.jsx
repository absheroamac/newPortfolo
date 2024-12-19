import Circle from "../../assets/circle.png";
import Portrait from "../../assets/self portait.png";
import { Box } from "@mui/material";
import styles from "./HeroImage.module.css";

const HeroImage = () => {
  return (
    <Box className={styles.container}>
      <img src={Circle} className={styles.circle} />
      <img src={Portrait} className={styles.portrait} />
    </Box>
  );
};

export default HeroImage;
