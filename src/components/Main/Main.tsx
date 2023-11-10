import { Outlet } from "react-router-dom";
import { Box, Typography } from "@mui/material";

import bg from "../../img/header_bg.svg";

export const Main = () => {
 return (
  <Box
   component="main"
   sx={{
    background: `url(${bg})`,
    height: "345px",
    backgroundRepeat: "no-repeat",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
   }}
  >
   <Box>
    <Typography
     sx={{
      color: "#202329",
      textAlign: "center",
      fontFamily: "Roboto, sans-serif ",
      fontSize: "101.25px",
      fontStyle: "normal",
      fontWeight: 900,
      lineHeight: "111.375px",
     }}
    >
     The Rick and Morty API
    </Typography>
   </Box>
   <Outlet />
  </Box>
 );
};
