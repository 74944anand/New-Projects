import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="conatiner">
      <button
        className="btn btn-primary"
        type="button"
        onClick={() => navigate("/book")}
      >
        Book Tickets
      </button>
      <button
        className="btn btn-secondary"
        type="button"
        onClick={() => navigate("/show")}
      >
        Show Tickets
      </button>
    </div>
  );
};

export default Home;
