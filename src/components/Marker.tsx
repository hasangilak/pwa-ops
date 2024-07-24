import React from "react";
import "./Marker.css";

const Marker: React.FC<{ lat: number; lng: number; text: string }> = ({
  text,
}) => (
  <div className="marker">
    <img src="/marker.png" alt="marker" />
    <span>{text}</span>
  </div>
);

export default Marker;
