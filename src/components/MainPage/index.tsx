import React, { useEffect, useState } from "react";
import "./MainPage.scss";
import { Button, Card } from "react-bootstrap";
import { getTwentyRandomGames } from "../../api";
import { cleanAllGamesFetchData } from "../../utilities";
import { CleanedFetchData } from "../../interfaces";

const MainPage: React.FC = () => {
  const [games, setGames] = useState<Array<CleanedFetchData>>([]);

  useEffect(() => {
    getTwentyRandomGames().then((data) => {
      const cleanedData = cleanAllGamesFetchData(data.results);
      setGames(cleanedData);
    });
  }, []);

  const renderCard = (card: CleanedFetchData, index: number) => {
    return (
      <div className="row">
        <div className="col-sm-6">
          <Card style={{ width: "18rem" }} key={index}>
            <Card.Img variant="top" src={card.background_image} />
            <Card.Body>
              <Card.Title>{card.name}</Card.Title>
              <Card.Text>Metacritic: {card.metacritic}</Card.Text>
              <Button variant="primary">Game Details</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  };

  return (
    <div className="card-deck">
      {games.length && console.log(games)}
      {games.map(renderCard)}
    </div>
  );
};

export default MainPage;
