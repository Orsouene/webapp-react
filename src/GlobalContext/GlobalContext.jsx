// IMPORTO AXIOS
import axios from "axios";
// Importo React hook: createContext per il contesto, useState per lo stato e useEffect per effetti collaterali.
import { createContext, useState, useEffect } from "react";
// Crea un contesto vuoto che verrà utilizzato per condividere lo stato tra i componenti.
const GlobalContext = createContext();
// Dichiaro il mio URL
const url = import.meta.env.VITE_API_URL;
const endPoint = "movies";
// Creo il componente GlobalProvider che fornirà i dati ai componenti figli tramite il contesto.
const GlobalProvider = ({ children }) => {
  //  una variabile di stato che conterrà la lista dei film.
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // function to get all movies
    const getData = () => {
      const finalUrl = `${url}/${endPoint}`;
      console.log(finalUrl);
      // axios per fare una richiesta GET all'API
      axios
        .get(finalUrl)
        .then((res) => {
          setMovies(res.data);
          setLoading(false);
          console.log(res.data);
        })
        .catch((error) => {
          console.error("error fetching movies", error);
          setLoading(false);
        });
    };

    getData();
  }, []);

  // i dati dei film disponibili a tutti i componenti figli tramite il GlobalContext.
  return (
    <GlobalContext.Provider value={{ movies, loading, setLoading }}>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
