// IMPORTO IL GLOBAL CONTEXT
import DefaultLayout from "./Layout/DefaultLayout";
// importo il globalProvider
import { GlobalProvider } from "./GlobalContext/GlobalContext";
// importo il Routing
import { BrowserRouter, Routes, Route } from "react-router-dom";
// CSS FILE
import "./index.css";
// IMPORTO LA PAGINA HOME
import HomePage from "./Pages/HomePage";
// IMPORTO LA PAGINA DETAILS
import Details from "./Pages/Details";
// IMPORTO IL NOT-FOUND PAGE
import NotFoundTV from "./Pages/notFound";

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/:id" element={<Details />} />
            <Route path="/NotFound" element={<NotFoundTV />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalProvider>
  );
}

export default App;
