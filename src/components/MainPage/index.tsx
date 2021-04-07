import React from "react";
import { Button, Card } from "react-bootstrap";
import placeholder from "../../assets/got-placeholder.jpeg";

const MainPage: React.FC = () => {

  const cardInfo = [
    { image: placeholder, title: "Lebron James", text: "Wanna be Goat" },
    { image: placeholder, title: "James Harden", text: "Not a Goat" },
    { image: placeholder, title: "Nikola Jokic", text: "GOAT" },
    { image: placeholder, title: "Aaron Gordon", text: "2nd GOAT" },
  ];

  const renderCard = (
    card: { image: string; title: string; text: string },
    index: number
  ) => {
    return (
      <Card style={{ width: "18rem" }} key={index}>
        <Card.Img variant="top" src={card.image} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>
            {card.text}
          </Card.Text>
          <Button variant="primary">Game Details</Button>
        </Card.Body>
      </Card>
    );
  };

  return (
    <div>{cardInfo.map(renderCard)}</div>
  )
};

export default MainPage;
