import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import image from "../img/background.jpg";

const Banner = () => {
  const [bannerHeight, setBannerHeight] = useState(0);
  useEffect(() => {
    setBannerHeight(window.innerHeight);
  }, []);
  return (
    <Box
      sx={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        height: {
          xs: bannerHeight / 3,
          sm: bannerHeight / 2,
          md: bannerHeight,
        },
        width: "100%",
      }}
    >
      <Stack
        alignItems={"center"}
        justifyContent={"center"}
        sx={{
          backgroundColor: "rgba(0,0,0, 0.5)",
          width: "100%",
          height: "100%",
        }}
      >
        <Button
          sx={{ fontSize: '20px', padding: "20px", display: {'xs': 'none', 'sm': 'block'} }}
          size="large"
          variant="contained"
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
        >
          Explore new exercises
        </Button>
      </Stack>
    </Box>
  );
};

export default Banner;
