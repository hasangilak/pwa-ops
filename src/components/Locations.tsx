import React from "react";
import "./Locations.css";

const Locations: React.FC<{
  locations: MapLocation[];
  selecteds: number[];
  toggleLocation: (id: number) => void;
}> = ({ locations, selecteds, toggleLocation }) => {
  return (
    <aside className="location-list">
      <div className="locations">
        {locations.map((location) => (
          <div
            className={`location ${
              selecteds.includes(location.id) ? "selected" : ""
            }`}
            key={location.id}
            onClick={() => {
              toggleLocation(location.id);
            }}
          >
            <img src={location.image} alt={location.description} />
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
