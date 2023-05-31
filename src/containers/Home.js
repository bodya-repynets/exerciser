import { Box } from "@mui/material";
import { useState } from "react";
import Banner from "../components/Banner";
import Exercises from "../components/Exercises";
import SearchContainer from "./SearchContainer";
import PaginationComponent from "../components/PaginationComponent";

const Home = () => {
  return (
    <>
      <Banner />
      <Box sx={{ width: "90%", margin: "0 auto" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}></Box>
        <SearchContainer/>
        <Exercises />
        <PaginationComponent/>
      </Box>
    </>
  );
};

export default Home;
