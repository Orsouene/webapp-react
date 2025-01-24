import { useState } from "react";
// IMPORTO IL GLOBAL CONTEXT
import DefaultLayout from "./Layout/DefaultLayout";

// importo il Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
// IMPORTO LA PAGINA HOME
import HomePage from "./Pages/HomePage";
// IMPORTO LA PAGINA DETAILS
import Details from "./Pages/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/:id" element={<Details />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
