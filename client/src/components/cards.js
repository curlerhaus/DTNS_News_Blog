import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./cards.css";
import { Link } from "react-router-dom";

function CardTemplate({ posts }) {
  console.log("Here are the posts", posts);
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img className="cardimg" variant="top" src="./tacos.jpg" />
        <Card.Body>
          <Card.Title className="cardtitle">Tacos! Tacos! Tacos!</Card.Title>
          <Card.Text className="posttext">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </Card.Text>
          <Link to="/postpage">
            <div className="button">
              <Button variant="primary">Read More</Button>
            </div>
          </Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default CardTemplate;
