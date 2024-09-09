import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

export default function Home() {
  return (
    <div className="home-background">
      <Row className="m-0 w-100 h-100">
        <Col className="d-flex align-items-center justify-content-center">
          <div className="home-content">
            <h1>Welcome to our Fitness Tracker App</h1>
            <p>Create, Update, Delete, and View Our Fitness Activities</p>
            <Link className="btn btn-primary" to={'/items'}>Check Our Fitness Activities</Link>
          </div>
        </Col>
      </Row>
    </div>
  );
}