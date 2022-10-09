import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./cards.css";

function CardTemplate({ posts }) {
  console.log("Here are the posts", posts);
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top"
        src="https://place-puppy.com/public-images/index-page/image8/210x280-lg.jpg"
      />
      <Card.Body>
        <Card.Title>{posts.title}</Card.Title>
        <Card.Text>{posts.content}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

export default CardTemplate;
