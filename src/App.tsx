import React from "react";
import Header from "./components/Header";
import SearchFilters from "./components/Locations";
import Map from "./components/Map";
import "./App.css";

const App: React.FC = () => {
  const locations: MapLocation[] = [
    {
      id: 1,
      name: "Kladderadatsch",
      description: "Matjes mit Bratkartoffeln. Sehr lecker....",
      tags: ["Restaurant", "Food"],
      address: "Puschkinallee 15, 12435 Berlin",
      image: "kladderadatsch.jpg",
      coord: { lat: 52.493486, lng: 13.464652 },
    },
    {
      id: 2,
      name: "Schwarzer Panther",
      description: "Pawel Weselow",
      tags: ["Monument", "Statue"],
      address: "Alt, Berlin",
      image: "schwarzer.jpg",
      coord: { lat: 52.491740028824786, lng: 13.469559757131584 },
    },
    {
      id: 3,
      name: "Caroline-Tübbecke-Ufer",
      description: "Trail running",
      tags: ["Sport", "Hiking"],
      address: "10245 Berlin",
      image: "Caroline.jpg",
      coord: { lat: 52.49327491866196, lng: 13.471367743512364 },
    },
    {
      id: 4,
      name: "Sportplatz Alt Stralau",
      description: "Football club",
      tags: ["Sport", "Tennis", "football"],
      address: "Alt-Stralau, 10245 Berlin",
      image: "football.jpg",
      coord: { lat: 52.49373083430627, lng: 13.475427571564357 },
    },
  ];

  return (
    <div className="container">
      <Header />
      <div className="main-content">
        <SearchFilters locations={locations} />
        <Map locations={locations} />
      </div>
    </div>
  );
};

export default App;
