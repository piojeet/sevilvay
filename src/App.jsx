import React from "react";
import { Route, Routes } from "react-router";
import Home from "./routes/Home";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </main>
  );
}

export default App;
