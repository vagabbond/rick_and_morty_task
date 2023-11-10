import {
 Box,
 Card,
 CardContent,
 CardMedia,
 CardActionArea,
 Typography,
 CardHeader,
} from "@mui/material";

// import img from "../../img/22.jpeg.png";

const data = [
 {
  img: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  name: "Rick Sanchez",
  species: "Human",
  status: "Alive",
  location: "Earth (Replacement Dimension)",
  firstSeen: "Pilot",
 },
 {
  img: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  name: "Morty Smith",
  species: "Human",
  status: "Alive",
  location: "Earth (Replacement Dimension)",
  firstSeen: "Pilot",
 },
 {
  img: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  name: "Summer Smith",
  species: "Human",
  status: "Alive",
  location: "Earth (Replacement Dimension)",
  firstSeen: "Pilot",
 },
 {
  img: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  name: "Beth Smith",
  species: "Human",
  status: "Alive",
  location: "Earth (Replacement Dimension)",
  firstSeen: "Pilot",
 },
 {
  img: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
  name: "Jerry Smith",
  species: "Human",
  status: "Alive",
  location: "Earth (Replacement Dimension)",
  firstSeen: "Pilot",
 },
 {
  img: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
  name: "Abadango Cluster Princess",
  species: "Alien",
  status: "Alive",
  location: "Abadango",
  firstSeen: "Pilot",
 },
];
export const HeroesList = () => {
 return (
  <Box
   component="ul"
   sx={{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "27px",
    margin: "0",
    padding: "0",
   }}
  >
   {data.map((item) => (
    <Card
     component="li"
     sx={{
      display: "flex",

      height: "220px",
      width: "600px",
      borderRadius: "9px",
      backgroundColor: "#3C3E44",

      boxShadow:
       "0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.10)",
     }}
    >
     <CardActionArea
      sx={{
       display: "flex",
       justifyContent: "center",
       alignItems: "center",
       flexDirection: "row",
      }}
     >
      <CardMedia
       component="img"
       src={item.img}
       sx={{
        width: "230px",
       }}
      />
      <CardContent
       sx={{
        width: "100%",

        padding: "13px",
        display: "flex",
        flexDirection: "column",

        gap: "13px",
       }}
      >
       <Box>
        <CardHeader
         title={item.name}
         sx={{
          padding: "0",
          color: "#F5F5F5",
          fontFamily: "Roboto, sans-serif",
          fontSize: "18px",
          fontWeight: "400",
          lineHeight: "29.25px",
         }}
        />
        <Typography
         sx={{
          color: "#FFF",
          fontFamily: "Roboto,sans-serif",
          fontSize: "16px",
          fontWeight: "500",
          lineHeight: "26px",
          textTransform: "capitalize",
         }}
        >
         unknown - {item.species}
        </Typography>
       </Box>
       <Box>
        <Typography
         sx={{
          color: "#9E9E9E",
          fontFamily: "Roboto,sans-serif",
          fontSize: "15px",
          fontWeight: "500",
          lineHeight: "26px",
         }}
        >
         Last known location:
        </Typography>
        <Typography
         sx={{
          color: "#F5F5F5",
          fontFamily: "Roboto,sans-serif",
          fontSize: "18px",
          fontWeight: "400",
          lineHeight: "29.25px",
         }}
        >
         {item.location}
        </Typography>
       </Box>
       <Box>
        <Typography
         sx={{
          color: "#9E9E9E",
          fontFamily: "Roboto,sans-serif",
          fontSize: "15px",
          fontWeight: "500",
          lineHeight: "26px",
         }}
        >
         First seen in:
        </Typography>
        <Typography
         sx={{
          color: "#F5F5F5",
          fontFamily: "Roboto,sans-serif",
          fontSize: "18px",
          fontWeight: "400",
          lineHeight: "29.25px",
         }}
        >
         {item.firstSeen}
        </Typography>
       </Box>
      </CardContent>
     </CardActionArea>
    </Card>
   ))}
  </Box>
 );
};
