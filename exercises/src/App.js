import React from "react";
import ClickCounter from "./ClickCounter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<ClickCounter initialValue={2} increment={2} />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App