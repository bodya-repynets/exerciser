import { Button, Stack, MenuItem, Select } from "@mui/material";
import React from "react";
import { useGlobalContext } from "../context";

const BodyParts = () => {
  const { bodyPart, setBodyPart, handleSelect, categories } =
    useGlobalContext();
  return (
    <Stack
      sx={{
        width: {'xs': '100%', 'sm': '50%'},
      }}
      spacing={"20px"}
      alignItems={"center"}
    >
      <Select
        sx={{
          width: "80%"
        }}
  
        value={bodyPart}
        onChange={(e) => setBodyPart(e.target.value)}
      >
        {categories.map((category, index) => {
          return (
            <MenuItem key={index} value={category}>
              {category}
            </MenuItem>
          );
        })}
      </Select>
      <Button
        sx={{ height: "44px", width: "40%" }}
        variant="contained"
        onClick={handleSelect}
      >
        Search
      </Button>
    </Stack>
  );
};

export default BodyParts;
