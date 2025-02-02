import React, { useState, useEffect } from "react";
import { Box, Typography, Zoom } from "@mui/material";

const images = [
  "https://wallpapers.com/images/featured/couple-2ub8dk6cccwitl9v.jpg",
  "https://wallpapercrafter.com/desktop/258804-couple-person-hug-and-girl-hd.jpg",
  "https://c1.wallpaperflare.com/preview/357/619/623/valentine-sunset-beach-couples.jpg",
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [start, setStart] = useState(false);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    setStart(true);
  });

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        margin: "auto",
        overflow: "hidden",
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        color: "white",
      }}
    >
      <Box
        sx={{
          display: "flex",
          transform: `translateX(-${activeIndex * 100}%)`,
          transition: "transform 1s ease-in-out",
        }}
      >
        {images.map((image, index) => (
          <>
            <Box
              key={index}
              sx={{
                flexShrink: 0,
                width: "100%",
                height: "600px",
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
          </>
        ))}
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            position: "absolute",
            top: "20px",
            height: "92%",
            border: "rgb(255 255 255 / 70%) 2px solid",
            width: "96%",
            margin: "2px",
          }}
        >
          <Zoom in={start} style={{ transitionDelay: "500ms" }}>
            <Box
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                  md: "flex",
                  lg: "flex",
                },
              }}
            >
              <Typography
                sx={{
                  fontSize: "45px",
                  right: "366px",
                  zIndex: "1",
                  top: "6px",
                  position: "absolute",
                }}
              >
                "
              </Typography>
              <Typography
                sx={{
                  bgcolor: "rgb(25 25 25 / 50%)",
                  width: "fit-content",
                  fontWeight: "700",
                  padding: "4px 15px",
                  top: "25px",
                  position: "absolute",
                  right: "170px",
                  textTransform: "uppercase",
                }}
              >
                Capturing Moments
              </Typography>
              <Typography
                sx={{
                  width: "fit-content",
                  padding: "4px 15px",
                  top: "15px",
                  position: "absolute",
                  right: "130px",
                  fontSize: "25px",
                  textTransform: "uppercase",
                  fontFamily: "cursive",
                }}
              >
                &
              </Typography>

              <Typography
                sx={{
                  bgcolor: "rgb(25 25 25 / 50%)",
                  width: "fit-content",
                  fontWeight: "700",
                  padding: "4px 15px",
                  top: "52px",
                  position: "absolute",
                  right: "70px",
                  textTransform: "uppercase",
                }}
              >
                Creating Memories
              </Typography>
              <Typography
                sx={{
                  fontSize: "45px",
                  right: "72px",
                  zIndex: "1",
                  top: "33px",
                  position: "absolute",
                }}
              >
                "
              </Typography>
            </Box>
          </Zoom>
        </Box>
      </Box>
    </Box>
  );
};

export default Carousel;
