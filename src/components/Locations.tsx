import React from "react";
import "./Locations.css";

const Locations: React.FC = () => {
  const locations = [
    {
      id: 1,
      name: "Kladderadatsch",
      description: "Matjes mit Bratkartoffeln. Sehr lecker....",
      tags: ["Restaurant", "Food"],
      address: "Puschkinallee 15, 12435 Berlin",
      image: "kladderadatsch.jpg",
    },
    {
      id: 2,
      name: "Schwarzer Panther",
      description: "Pawel Weselow",
      tags: ["Monument", "Statue"],
      address: "Alt, Berlin",
      image: "schwarzer.jpg",
    },
  ];

  return (
    <aside className="location-list">
      <div className="locations">
        {locations.map((location) => (
          <div className="location" key={location.id}>
            <img src={location.image} alt="Seniorenzentrum Nurnberg" />
            <div className="location-info">
              <h3>{location.name}</h3>
              <p>{location.description}</p>
              <div className="location-tags">
                {location.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <p>{location.description}</p>
            </div>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default Locations;
