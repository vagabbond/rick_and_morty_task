import { Box, Avatar, Typography, List, ListItem } from "@mui/material";
import Logo2 from "../../img/incode.png";
import { AiFillGithub, AiFillHeart, AiOutlineTwitter } from "react-icons/ai";

const components = [
 { key: "AiFillGithub", value: <AiFillGithub size={18} color="#9E9E9E" /> },
 {
  key: "AiOutlineTwitter",
  value: <AiOutlineTwitter size={18} color="#9E9E9E" />,
 },
 { key: "AiFillHeart", value: <AiFillHeart size={18} color="#9E9E9E" /> },
];

export const Footer = () => {
 return (
  <Box
   component="footer"
   sx={{
    width: "100%",
    backgroundColor: "#202329",

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    padding: "47px 0",
   }}
  >
   <Box
    sx={{
     width: "212px",

     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     flexDirection: "column",
    }}
   >
    <Typography
     sx={{
      textAlign: "center",
      fontSize: "13,5px",
      lineHeight: "21,938px",
      textTransform: "uppercase",
      color: "#9E9E9E",
      fontWeight: 700,
     }}
    >
     performed as part of a test case for the company
    </Typography>
    <Box
     sx={{
      position: "relative",
      display: "flex",

      justifyContent: "center",
      alignItems: "center",

      mt: "18px",
      width: "82px",
      height: "82px",
     }}
    >
     <Box
      sx={{
       position: "absolute",
       top: "0px",
       left: "0px",
       background:
        "linear-gradient(227deg, rgba(255, 255, 255, 0.80) -1.89%, rgba(255, 255, 255, 0.00) 98.53%)",
       filter: "blur(42px)",
       width: "82px",
       height: "82px",
      }}
     />
     <Avatar src={Logo2} />
    </Box>
    <List
     sx={{
      height: "29px",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      gap: "27px",
      mt: "40px",
      p: 0,
     }}
    >
     {components.map((el) => (
      <ListItem
       key={el.key}
       sx={{
        p: 0,
       }}
      >
       {el.value}
      </ListItem>
     ))}
    </List>
    <Typography
     sx={{
      color: "#9E9E9E",
      fontFamily: "Roboto, sans-serif",
      fontSize: "12.5px",
      fontWeight: "400",
      lineHeight: "21.938px",

      mt: "27px",
     }}
    >
     2023
    </Typography>
   </Box>
  </Box>
 );
};
