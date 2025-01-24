// IMPORTO AXIOS
import axios from "axios";

import { createContext, useState, useEffect, Children } from "react";

const GlobalContext = createContext();

// Dichiaro il mio URL
const url = import.meta.env.VITE_API_URL;
const endPoint = "movies";

const GlobalProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const getData = () => {
      const finalUrl = `${url}/${endPoint}`;
      console.log(finalUrl);
      axios
        .get(finalUrl)
        .then((res) => {
          setMovies(res.data);
          console.log(res.data);
        })
        .catch((error) => {
          console.error("error fetching movies", error);
        });
    };
    getData();
  }, []);
  // function to get all movies

  return (
    <GlobalContext.Provider value={movies}>{children}</GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
