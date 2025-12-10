 import React from "react";
import { Link } from "react-router-dom";
import "./Portfolio.css";

function CardGrid() {
  const cards = [
    { id: 1, image: "https://routeegy.github.io/startFramework/assets/images/port3.png", link: "/page1", },
    { id: 2, image: "https://routeegy.github.io/startFramework/assets/images/port2.png", link: "/page2",  },
    { id: 3, image: "https://routeegy.github.io/startFramework/assets/images/poert1.png", link: "/page3",},
    { id: 4, image: "https://routeegy.github.io/startFramework/assets/images/poert1.png", link: "/page4", },
    { id: 5, image: "https://routeegy.github.io/startFramework/assets/images/port3.png", link: "/page5", },
    { id: 6, image: "https://routeegy.github.io/startFramework/assets/images/port2.png", link: "/page6",},
  ];

  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20px", marginBottom: "40px" }}>
        Portfolio Component
      </h1>
      <div className="card-grid">
        {cards.map((card) => (
          <div key={card.id} className="card">
            <Link to={card.link}>
              <div className="card-image">
                <img src={card.image} alt={card.title} />
                <div className="overlay">
                  <span className="plus">+</span>
                  <h3>{card.title}</h3>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CardGrid;
