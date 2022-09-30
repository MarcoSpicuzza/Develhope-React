import React from "react";
import Counter from "./Counter";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/counter" element={<Counter initialValue={2} increment={2} />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App