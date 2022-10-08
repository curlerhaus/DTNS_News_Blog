import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./cards.css";

function CardTemplate() {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://place-puppy.com/public-images/index-page/image8/210x280-lg.jpg"
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardTemplate;
