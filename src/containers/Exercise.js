import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useGlobalContext } from "../context";
import { Stack, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Exercise = () => {
  const { activeExercises } = useGlobalContext();
  const { id } = useParams();
  const [element, setElement] = useState({});
  useEffect(() => {
    setElement(activeExercises.find((item) => item.id === id));
  }, []);

  return (
    <Stack
      alignItems={"center"}
      justifyContent={"space-between"}
      margin={"50px auto"}
      spacing={'50px'}
    >
      <Link to={"/"}>
        <Typography
          sx={{
            padding: "20px",
            fontWeight: "600",
            fontSize: "28px",
            color: "primary.main",
            textDecoration: "underline",
          }}
        >
          Back to all
        </Typography>
      </Link>
      <Stack
        
        sx={{
          borderRadius: "20px",
          overflow: "hidden",
          flexDirection: { 'xs': "column", 'md': "row" },
          width: { 'xs': "80vw",'sm': '50vw', 'md': "80vw" },
        }}
      >
        <Box sx={{width: { 'xs': "100%", 'md': "50%" }}}>
          <img
            style={{ height: "400px" }}
            src={element.gifUrl}
            loading="lazy"
          />
        </Box>
        <Stack
          sx={{width: { 'xs': "100%", 'md': "50%",  },backgroundColor: "rgba(0,0,0,0.3)", padding: '20px' }}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          spacing={'10px'}
        >
          <Typography
            sx={{
              color: "white",
              fontSize: {'xs': '16px', 'sm': '18px', 'md': '20px'},
              fontWeight: "600",
              letterSpacing: "3px",
              backgroundColor: "primary.main",
              padding: "5px",
            }}
          >
            Name of exercise: {element.name}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: {'xs': '16px', 'sm': '18px', 'md': '20px'},
              fontWeight: "600",
              letterSpacing: "3px",
              backgroundColor: "primary.main",
              padding: "5px",
            }}
          >
            Part of body: {element.bodyPart}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: {'xs': '16px', 'sm': '18px', 'md': '20px'},
              fontWeight: "600",
              letterSpacing: "3px",
              backgroundColor: "primary.main",
              padding: "5px",
            }}
          >
            Target muscle: {element.target}
          </Typography>
          <Typography
            sx={{
              color: "white",
              fontSize: {'xs': '16px', 'sm': '18px', 'md': '20px'},
              fontWeight: "600",
              letterSpacing: "3px",
              backgroundColor: "primary.main",
              padding: "5px",
            }}
          >
            Equimpment needed: {element.name}
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Exercise;
