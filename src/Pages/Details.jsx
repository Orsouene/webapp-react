import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";

export default function Details() {
  // Dichiaro il mio URL
  const url = import.meta.env.VITE_API_URL;
  const endPoint = "movies";
  const [MovieDetails, setMovieDetails] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    const getDataDetails = () => {
      axios
        .get(`${url}/${endPoint}/${id}`)
        .then((res) => {
          console.log(res.data);
          setMovieDetails(res.data);
        })
        .catch((err) => {
          console.log("film details not found", err);
        });
    };
    getDataDetails();
  }, [id]);

  return (
    <section className="d-flex g-5 wrapper">
      {MovieDetails && (
        <div className="card" style={{ width: "18rem" }}>
          <img
            src={MovieDetails.image}
            className="card-img-top"
            alt={MovieDetails.title}
          />
          <div className="card-body">
            <h5 className="card-title">{MovieDetails.title}</h5>
            <p className="card-text">{MovieDetails.abstract}</p>
            <div className="card-text">
              {MovieDetails.reviews.map((review) => (
                <div key={review.id}>
                  <p>User : {review.name}</p>
                  <p> Comment : {review.text} </p>
                  <p> Vote : {review.vote} </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
