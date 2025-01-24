import { Button } from "react-bootstrap";

function Card({ movie }) {
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={movie.image} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.abstract}</p>
        <Button variant="primary">See more</Button>
      </div>
    </div>
  );
}

export default Card;
