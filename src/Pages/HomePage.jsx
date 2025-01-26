// Importo il contesto GlobalContext per accedere ai dati condivisi a livello globale
import { GlobalContext } from "../GlobalContext/GlobalContext";
// Importo useContext per ottenere i dati dal GlobalContext.
import { useContext } from "react";
// Importo il file del Card
import Card from "../Components/Card";
// il componente HomePage che mostra la lista dei film.

export default function HomePage() {
  // useContext per ottenere i dati dei film dal GlobalContext.
  const movies = useContext(GlobalContext);
  return (
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
    </section>
  );
}
