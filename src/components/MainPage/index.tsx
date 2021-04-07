import React from "react";
import { Button, Card } from "react-bootstrap";
import placeholder from "../../assets/got-placeholder.jpeg"

const MainPage: React.FC = () => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={placeholder} />
      <Card.Body>
        <Card.Title>Ghost of Tsushima</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Game Details</Button>
      </Card.Body>
    </Card>
  );
};

export default MainPage;
