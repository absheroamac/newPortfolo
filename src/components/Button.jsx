import { Box, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
// import { SvgIcon } from "@mui/material";

const Button = () => {
  return (
    <button
      style={{
        background: "none",
        padding: "0px",
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
      }}
    >
      <Box display={"flex"} gap={6}>
        <Typography color="#101322" fontSize={"1.5rem"}>
          Lets Connect
        </Typography>
        <Box
          sx={{
            backgroundColor: "#101322",
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
      <div
        style={{ backgroundColor: "#101322", height: "4px", width: "100%" }}
      ></div>
    </button>
  );
};

export default Button;
