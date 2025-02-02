import { Slide, Typography, Box, Divider, CardMedia } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Wedding() {
  const [start, setStart] = useState(true);

  const navigate = useNavigate(); 

  const handleClick = (coupleName) => {
    const formattedName = coupleName.toLowerCase().replace(/ /g, "-");
    navigate(`/projects/wedding/${formattedName}`);
  };

  const couples = [
    {
      name: "Alice & Bob",
      images: [
        "https://wallpapers.com/images/featured/couple-2ub8dk6cccwitl9v.jpg",
        "https://wallpapercrafter.com/desktop/258804-couple-person-hug-and-girl-hd.jpg",
        "https://c1.wallpaperflare.com/preview/357/619/623/valentine-sunset-beach-couples.jpg",
      ],
    },
    {
      name: "Charlie & Daisy",
      images: [
        "https://wallpapers.com/images/featured/couple-2ub8dk6cccwitl9v.jpg",
        "https://wallpapercrafter.com/desktop/258804-couple-person-hug-and-girl-hd.jpg",
        "https://c1.wallpaperflare.com/preview/357/619/623/valentine-sunset-beach-couples.jpg",
      ],
    },
    {
      name: "Ethan & Fiona",
      images: [
        "https://wallpapers.com/images/featured/couple-2ub8dk6cccwitl9v.jpg",
        "https://wallpapercrafter.com/desktop/258804-couple-person-hug-and-girl-hd.jpg",
        "https://c1.wallpaperflare.com/preview/357/619/623/valentine-sunset-beach-couples.jpg",
      ],
    },
    {
      name: "George & Hannah",
      images: [
        "https://wallpapers.com/images/featured/couple-2ub8dk6cccwitl9v.jpg",
        "https://wallpapercrafter.com/desktop/258804-couple-person-hug-and-girl-hd.jpg",
        "https://c1.wallpaperflare.com/preview/357/619/623/valentine-sunset-beach-couples.jpg",
      ],
    },
    {
      name: "Ian & Julia",
      images: [
        "https://wallpapers.com/images/featured/couple-2ub8dk6cccwitl9v.jpg",
        "https://wallpapercrafter.com/desktop/258804-couple-person-hug-and-girl-hd.jpg",
        "https://c1.wallpaperflare.com/preview/357/619/623/valentine-sunset-beach-couples.jpg",
      ],
    },
  ];

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "100px",
        padding: "10px",
      }}
    >
      <Slide direction="right" in={start} timeout={500}>
        <Typography
          sx={{
            fontSize: "24px",
            color: "black",
            fontFamily: "fantasy",
            letterSpacing: "3px",
            textAlign: "center",
          }}
        >
          Wedding
        </Typography>
      </Slide>
      <Divider />
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: {
            xs: "1fr",
            sm: "1fr 1fr",
            md: "1fr 1fr 1fr",
            lg: "1fr 1fr 1fr",
          },
          gap: "25px",
        }}
      >
        {couples.map((couple) => (
          <Box
            sx={{ position: "relative", marginTop: "10px", cursor: "pointer" }}
            onClick={() => handleClick(couple.name)}
          >
            <Typography
              sx={{
                position: "absolute",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                backgroundColor: "rgb(0 0 0 / 60%)",
                color: "white",
              }}
            >
              {couple.name}
            </Typography>
            <CardMedia
              component="img"
              height="300"
              image={couple.images[1]}
            ></CardMedia>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
