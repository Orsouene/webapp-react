//  Importo gli hook useEffect, useState da React per la gestione degli effetti collaterali e dello stato.
import { useEffect, useState } from "react";
// Importo i metodi useParams per ottenere i parametri dell'URL e useNavigate per navigare tra le pagine.
import { useParams, useNavigate } from "react-router-dom";
// Importo la libreria axios per effettuare richieste HTTP
import axios from "axios";
// il componente HomePage che mostra la lista dei film.
import AddReview from "./AddReview";

export default function Details() {
  // Dichiaro il mio URL

  const url = import.meta.env.VITE_API_URL;
  const endPoint = "movies";
  // useParams per ottenere l'ID del film dalla URL
  const { id } = useParams();
  // useState per dichiarare una variabile di stato che conterrà il film richiesto con il suo ID
  const [MovieDetails, setMovieDetails] = useState(null);
  const navigate = useNavigate();

  const getDataDetails = () => {
    // Eseguo una richiesta GET all'API con l'ID del film.
    axios
      .get(`${url}/${endPoint}/${id}`)
      .then((res) => {
        console.log(res.data);
        setMovieDetails(res.data);
      })
      .catch((err) => {
        console.log("film details not found", err);
        navigate("/NotFound");
      });
  };
  // Chiamo la funzione per recuperare i dettagli del film
  useEffect(() => {
    getDataDetails();
  }, [id]);

  return (
    <section className="d-flex g-5 wrapper">
      {MovieDetails && (
        <div className=" card CardDetails">
          <img
            src={`${url}/${MovieDetails.image}`}
            className="card-img-top imgDetails"
            alt={MovieDetails.title}
          />
          <div className="card-body">
            <h5 className="card-title">{MovieDetails.title}</h5>
            <p className="card-text">{MovieDetails.abstract}</p>
            <div className="card-text">
              <h5 className="card-title">Users' Reviews :</h5>

              {MovieDetails.reviews.map((review) => (
                <div key={review.id}>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <strong className="badge" style={{ fontSize: "1rem" }}>
                      User :
                    </strong>
                    {review.name}
                  </p>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <strong className="badge" style={{ fontSize: "1rem" }}>
                      Comment :{" "}
                    </strong>
                    {review.text}
                  </p>
                  <p
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <strong className="badge" style={{ fontSize: "1rem" }}>
                      Vote :
                    </strong>
                    {review.vote}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <AddReview Movie_id={MovieDetails?.id} reloadReview={getDataDetails} />
    </section>
  );
}
