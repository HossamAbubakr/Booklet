import { Link } from "react-router-dom";
import Button from "react-bootstrap/button";
import "./Overview.css";
export default function Overview() {
  return (
    <div className="booklet-list">
      <div className="booklet-list-header">
        <p>Welcome To Booklet. The Book Shopping App</p>
        <p>Knowledge At Your Fingertips</p>
      </div>
      <div className="dashboard">
        <img src="/images/dashboard-logo.png" alt="Booklet logo" id="booklet-logo" />
        <p>Browse, Discover, Enjoy</p>
        <div className="dashboard-info">
          Booklet is the best place to find your favorite books, discover new ones and get the latest releases!
        </div>
        <Link to="/shop">
          <Button variant="outline-warning">Begin</Button>
        </Link>
      </div>
    </div>
  );
}
