import React from "react";
import "./Marker.css";

const Marker: React.FC<{
  id: number;
  lat: number;
  lng: number;
  text: string;
  selected: boolean;
  toggleLocation: (id: number) => void;
}> = ({ text, toggleLocation, id, selected }) => (
  <div
    className="marker"
    onClick={() => {
      toggleLocation(id);
    }}
  >
    <img src="/marker.png" alt="marker" />
    <span className={selected ? "selected" : ""}>{text}</span>
  </div>
);

export default Marker;
