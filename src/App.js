import React from "react";
import Main from "./pages/Main";
import Exercise from "./pages/Exercise";
import Home from "./containers/Home";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter basename="/exerciser">
      <Routes>
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
          <Route path="/exercises/:id" element={<Exercise />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
