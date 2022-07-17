import Card from "./Card";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import cardsService from "../services/cardService";
import PageHeader from "./common/PageHeader";

const MyCards = () => {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    async function getCards() {
      const { data } = await cardsService.getAll();
      setCards(data);
    }

    getCards();
  }, []);

  return (
    <>
      <PageHeader
        title="My Cards"
        description="your cards are in the list below"
      />
      <div className="row">
        <Link to="create-card">Create a New Card</Link>
      </div>

      <div className="row">
        {!cards.length ? (
          <p>No Cards..</p>
        ) : (
          cards.map((card) => <Card key={card._id} card={card} />)
        )}
      </div>
    </>
  );
};

export default MyCards;
