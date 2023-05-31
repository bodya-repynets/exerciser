import { Button, Stack, TextField } from "@mui/material";
import { useGlobalContext } from "../context";
import React from "react";

const Search = () => {
  const { searchValue, setSearchValue, handleSearch } = useGlobalContext();
  return (
    <Stack
      sx={{
        width: "50%",
      }}
      spacing={"20px"}
      alignItems={"center"}
    >
      <TextField
        sx={{ width: "80%" }}
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
      <Button
        sx={{ height: "44px", width: "40%" }}
        variant="contained"
        onClick={handleSearch}
      >
        Search
      </Button>
    </Stack>
  );
};

export default Search;
