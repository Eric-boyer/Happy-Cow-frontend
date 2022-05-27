import Slider from "../components/Slider";
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, useMap } from "react-leaflet";

const Restaurant = () => {
  const location = useLocation();
  const { item } = location.state;
  return (
    <>
      <Slider />
      <div>{item.name}</div>

      {item.pictures.map((picture, index) => {
        return <img key={index} src={picture} alt="" />;
      })}
      <div>
        <div style={{ height: "100%" }}>
          <MapContainer
            style={{ height: "100%" }}
            center={[48.856614, 2.3522219]}
            zoom={11}
            scrollWheelZoom={false}
          ></MapContainer>
        </div>
      </div>
    </>
  );
};
export default Restaurant;
