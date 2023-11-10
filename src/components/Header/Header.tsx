import { Link as RouterLink } from "react-router-dom";
import { Box, Link } from "@mui/material";

import { ReactComponent as Logo } from "../../img/Vector.svg";

export const Header = () => {
 return (
  <Box component="header" sx={{ padding: "10px 27px" }}>
   <Link
    component={RouterLink}
    to="/"
    sx={{
     textDecoration: "none",
    }}
   >
    <Logo />
   </Link>
  </Box>
 );
};
