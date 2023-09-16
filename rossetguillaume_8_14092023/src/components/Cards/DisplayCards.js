import React from "react";
import Logements from "../../data/logements.json";
import Card from "./Cards";
import "./Cards.scss";

const DisplayCards = () => {
  return (
    <section className="logements_container">
      <ul className="logements_list">
        {Logements.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </ul>
    </section>
  );
};

export default DisplayCards;
