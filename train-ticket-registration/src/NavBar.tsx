import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            Booking.com
          </Link>
          <Link to="/book" className="nav-item">
            Ticket Booking
          </Link>
          <Link to="/show" className="nav-item">
            Show Booking
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
