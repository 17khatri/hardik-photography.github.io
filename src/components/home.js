import { Box } from "@mui/material";
import Carousel from "./Carousel";
import PreWedding from "./Events/PreWedding";
import Wedding from "./Events/Wedding";

export default function Home() {
   return (
    <Box sx={{ p: 0, m: 0 }}>
      <Carousel />
      <PreWedding />
      <Wedding />
    </Box>
  );
}
