import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
function Card({ movie }) {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate(`${movie.id}`);
  };
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img src={movie.image} className="card-img-top" alt={movie.title} />
      <div className="card-body">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.abstract}</p>
        <Button variant="primary" onClick={handleClick}>
          Get Details
        </Button>
      </div>
    </div>
  );
}

export default Card;
