import { useState } from "react";

import { Box, Button, Pagination } from "@mui/material";
import { HeroesList } from "../../components/HeroesList/HeroesList";

export const Home = () => {
 const [page, setPage] = useState(1);
 const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
  setPage(value);
 };
 return (
  <Box
   sx={{
    width: "100%",

    backgroundColor: "#272B33",

    display: "flex",

    flexDirection: "column",
    gap: "20px",

    padding: "40px 106px",
   }}
  >
   <Button
    sx={{
     width: "143px",
     height: "56px",
     backgroundColor: "#fff",
     color: "#000",
    }}
   >
    Filter
   </Button>
   <Box
    sx={{
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     flexDirection: "column",
     gap: "20px",
    }}
   >
    <HeroesList />
    <Pagination
     count={6}
     variant="outlined"
     shape="rounded"
     page={page}
     onChange={handleChange}
     sx={{
      "& .MuiPaginationItem-root": {
       boxShadow:
        "0px 1px 5px 0px rgba(0, 0, 0, 0.12), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 1px 0px rgba(0, 0, 0, 0.20)",
       color: "#F5F5F5",
       backgroundColor: "#3C3E44",
       borderRadius: "4px",
       "&.Mui-selected": {
        backgroundColor: "#F5F5F5",
        color: "#202329",
       },
      },
      "& .MuiPaginationItem-previousNext": {
       backgroundColor: "#F5F5F5",
       color: "#3c3e44",
       "& .MuiDisabled": { color: "#272b3399", backgroundColor: "#9E9E9E" },
      },
     }}
    />
   </Box>
  </Box>
 );
};
