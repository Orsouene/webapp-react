import { GlobalContext } from "../GlobalContext/GlobalContext";
import Card from "../Components/Card";
import { useState, useContext } from "react";

export default function HomePage() {
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
