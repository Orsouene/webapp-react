import { useNavigate } from "react-router-dom";
function Card({ movie }) {
  const Navigate = useNavigate();
  const handleClick = () => {
    Navigate(`${movie.id}`);
  };
  return (
    <div className="card  " style={{ width: "18rem", height: "530px" }}>
      <img
        src={movie.image}
        className="card-img-top img-biblioteca"
        alt={movie.title}
      />
      <div className="card-body ">
        <h5 className="card-title">{movie.title}</h5>
        <p className="card-text">{movie.abstract}</p>
        <button
          style={{
            padding: "7px",
            backgroundColor: "white",
            borderRadius: "45px",
            color: "#4158CE",
          }}
          className="Btn"
          onClick={handleClick}
        >
          Get Details
        </button>
      </div>
    </div>
  );
}

export default Card;
