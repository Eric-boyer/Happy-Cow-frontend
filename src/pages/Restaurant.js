import Slider from "../components/Slider";
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Stars from "../components/Stars";

const Restaurant = () => {
  const location = useLocation();
  const { item } = location.state;

  console.log(item);
  // const longdescription= item.description.split(",")
  return (
    <>
      <Slider />

      {item.pictures.map((picture, index) => {
        return (
          <div className="caroussel-restaurant">
            <div>
              {/* {longdescription[longdescription.length-2]} */}
              <p>{item.description.slice(0,200)}...</p>
              <img key={index} src={picture} alt="" />
            </div>
          </div>
        );
      })}
      <div>
        <MapContainer center={[48.856614, 2.3522219]} zoom={12} scrollWheelZoom={true}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
         
          <Marker position={[item.location.lat, item.location.lng]} >
            <Popup position={[item.location.lat, item.location.lng]} >
             <div>
               <p>{"Name"+ item.name}</p>
               <p>{Stars (item.rating)}</p>
               <p>{"Phone"+ item.phone}</p>
               <p>{item.type}</p>

             
             </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      <div>hdhh</div>
    </>
  );
};
export default Restaurant;
