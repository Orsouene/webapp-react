// Importo il contesto GlobalContext per accedere ai dati condivisi a livello globale
import { GlobalContext } from "../GlobalContext/GlobalContext";
// Importo useContext per ottenere i dati dal GlobalContext.
import { useContext } from "react";
// Importo il file del Card
import Card from "../Components/Card";
// importo il pager
import Pager from "../Components/pager";

export default function Biblioteca() {
  // useContext per ottenere i dati dei film dal GlobalContext.
  const { movies, page, numPage, handleclick } = useContext(GlobalContext);

  return (
    <>
      <section className="d-flex g-5 wrapper">
        {movies && movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id}>
              <Card movie={movie} />
            </div>
          ))
        ) : (
          <p> no movies found</p>
        )}
        <Pager
          page={page}
          numPage={numPage}
          onChangePage={(numPage) => handleclick(numPage)}
        />
      </section>
    </>
  );
}
