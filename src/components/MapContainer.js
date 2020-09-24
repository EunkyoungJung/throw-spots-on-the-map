import React, { useState } from "react";
import {
  Map,
  TileLayer,
  WMSTileLayer,
  Marker,
  Tooltip,
  Popup,
  ScaleControl,
} from "react-leaflet";
import "./MapContainer.css";

const MapContainer = (props) => {
  const { selectedArea, spots } = props;
  const [marker, setMarker] = useState({
    lat: 0,
    lng: 0,
  });

  const mapUrls = {
    base: "https://xdworld.vworld.kr/2d/Base/201612/{z}/{x}/{y}.png",
    hybrid: "https://xdworld.vworld.kr/2d/Hybrid/201612/{z}/{x}/{y}.png",
    satellite: "https://xdworld.vworld.kr/2d/Satellite/201612/{z}/{x}/{y}.jpeg",
  };

  const onClickMap = (e) => {
    setMarker(e.latlng);
  };

  return (
    <Map
      center={[35.9078, 127.7669]}
      zoom={7.45}
      style={{ width: "100%" }}
      onClick={onClickMap}
    >
      <ScaleControl
        metric={true}
        imperial={false}
        ScaleControl={true}
      ></ScaleControl>
      <TileLayer url={mapUrls.satellite} attribution="VWORLD" />
      <WMSTileLayer url={mapUrls.hybrid} />
      <Marker position={[marker.lat, marker.lng]}></Marker>
      {spots !== undefined
        ? spots.map((spot) => (
            <Marker position={[spot.lat, spot.lng]}>
              <Tooltip>{spot.name}</Tooltip>
            </Marker>
          ))
        : null}
    </Map>
  );
};

export default MapContainer;
