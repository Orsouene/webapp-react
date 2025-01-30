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
  const [numPage, setNumPage] = useState(0);
  const [page, setPage] = useState(1);

  // axios per fare una richiesta GET all'API

  function getData() {
    // axios per fare una richiesta GET all'API
    axios
      .get(`${url}/${endPoint}`, { params: { page } })
      .then((res) => {
        setNumPage(Math.ceil(res.data.count / 4)); // Cambia 2 con 4
        setMovies(res.data.items);
        setLoading(false);
        console.log(res.data);
      })
      .catch((error) => {
        console.error(
          "Error fetching movies:",
          error.response ? error.response.data : error.message
        );
        setLoading(false);
      });
  }

  useEffect(() => {
    // function to get all movies
    getData();
  }, [page]);
  //Dipendenza da `page`
  function handleclick(numPage) {
    // Aggiusta i limiti delle pagine
    if (numPage < 1) {
      setPage(1); // Torna alla prima pagina se numPage è inferiore a 1
    } else if (numPage > numPage) {
      setPage(numPage); // Limita la pagina alla massima disponibile
    } else {
      setPage(numPage); // Imposta la pagina normalmente
    }
  }

  // i dati dei film disponibili a tutti i componenti figli tramite il GlobalContext.
  return (
    <GlobalContext.Provider
      value={{ movies, loading, setLoading, page, numPage, handleclick }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalProvider, GlobalContext };
