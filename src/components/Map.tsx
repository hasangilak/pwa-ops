import React from "react";
import GoogleMapReact from "google-map-react";
import Marker from "./Marker";

import "./Map.css";

const Map: React.FC<{markers: React.ReactNode | React.ReactNode[]}> = ({markers}) => {
  return (
    <div id="map" className="map">
      <div style={{ height: "96vh", width: "100%" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GMAP_API || "" }}
          defaultCenter={{
            lat: 52.494868,
            lng: 13.468534,
          }}
          options={{
            minZoom: 17,
            maxZoom: 20,
            draggable: false,
          }}
          defaultZoom={17}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => {
            const osmMapType = new maps.ImageMapType({
              getTileUrl: function (
                coord: { x: number; y: number },
                zoom: number
              ) {
                return (
                  "https://a.tile.openstreetmap.org/" +
                  zoom +
                  "/" +
                  coord.x +
                  "/" +
                  coord.y +
                  ".png"
                );
              },
              tileSize: new maps.Size(256, 256),
              name: "OSM",
              maxZoom: 18,
            });

            map.mapTypes.set("OSM", osmMapType);
            map.setMapTypeId("OSM");
          }}
        >{markers}</GoogleMapReact>
      </div>
    </div>
  );
};

export default Map;
