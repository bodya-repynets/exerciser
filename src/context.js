import { createContext, useContext, useEffect, useState } from "react";
import App from "./App";
import fetchByName from "./utils/fetchByName";
import fetchByBodyPart from "./utils/fetchByBodyPart";
import fetchBodyParts from "./utils/fetchBodyParts";
import fetchAllExercises from "./utils/fetchAllExercises";
import { ThemeProvider, createTheme } from "@mui/material";

export const useGlobalContext = () => useContext(GlobalContext);
const GlobalContext = createContext();

const AppContext = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#3f51b5",
      },
    },
  });
  const [searchValue, setSearchValue] = useState("");
  const [bodyPart, setBodyPart] = useState("");
  const [exercises, setExercises] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeExercises, setActiveExercises] = useState([]);
  const [categories, setCategories] = useState([]);
  const [pageNum, setPageNum] = useState(0);
  const [danger, setDanger] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSearch = () => {
    if (searchValue !== "") {
      fetchByName(setExercises, searchValue);
    } else {
      setDanger(true);
      setTimeout(() => {
        setDanger(false);
      }, 2000);
    }
  };
  const handleSelect = () => {
    if (bodyPart !== "") {
      fetchByBodyPart(setExercises, bodyPart);
    } else {
      setDanger(true);
      setTimeout(() => {
        setDanger(false);
      }, 2000);
    }
  };

  useEffect(() => {
    const localCategories = JSON.parse(localStorage.getItem("categories"));
    if (localCategories) {
      setCategories(localCategories);
    } else {
      fetchBodyParts(setCategories);
    }
    fetchAllExercises(setExercises);
  }, []);
  useEffect(() => {
    if (exercises.length > 0) {
      const num = Math.ceil(exercises.length / 12);
      const lastItem = currentPage * 12;
      const firstItem = lastItem - 12;
      const newExercises = exercises.slice(firstItem, lastItem);
      setActiveExercises(newExercises);
      setPageNum(num);
    }
  }, [currentPage, exercises]);

  return (
    <GlobalContext.Provider
      value={{
        searchValue,
        setSearchValue,
        handleSearch,
        exercises,
        bodyPart,
        setBodyPart,
        handleSelect,
        categories,
        currentPage,
        setCurrentPage,
        activeExercises,
        setActiveExercises,
        pageNum,
        danger,
        success,
      }}
    >
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </GlobalContext.Provider>
  );
};

export default AppContext;
