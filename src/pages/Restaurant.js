import Slider from "../components/Slider";
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Stars from "../components/Stars";
import Icon from "../assets/Icon";

const Restaurant = () => {
  const location = useLocation();
  const { item } = location.state;

  console.log(item);
  // const longdescription= item.description.split(",")
  return (
    <>
      <div className="div-under-header-restaurant">
        <div className="container-inside-header-restaurant">
          <h2 style={{ color: "white" }}>{item.name}</h2>
        </div>
      </div>
      <div className="second-div-under-header-restaurant">
        <div className="second-div-inside-under-restaurant">
          <div className="div-type-rating">
            <p>{Icon(item.type)}</p>
            <p>{Stars(item.rating)}</p>
          </div>
          <div>
            <button className="btn-right"> add review</button>
            <button className="btn-right"> add photos</button>
          </div>
        </div>
      </div>
      <div className="line"></div>

      <Slider />
      <div className=""></div>
      <div className="caroussel-restaurant">
        {item.pictures.map((picture, index) => {
          return (
            <div className="container-inside-caroussel">
              {/* {longdescription[longdescription.length-2]}  */}
              <img
                style={{ width: 270, height: 270, borderRadius: 5,objectFit:"cover" }}
                key={index}
                src={picture}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <div className="container-maps-decription">
        <div className="container-description">
          <p className="description-restaurant" >{item.description.slice(0, 400)}...</p>
          <div className="container-btn-under-description">
            <button className="btn-light"> add review</button>
            <button className="btn-light"> add photos</button>
          </div>
        </div>
        
        <div className="container-parent-leaflet">
        <div className="leaflet-container">
          <MapContainer
            center={[48.856614, 2.3522219]}
            zoom={12}
            scrollWheelZoom={true}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={[item.location.lat, item.location.lng]}>
              <Popup position={[item.location.lat, item.location.lng]}>
                <div>
                  <p>{"Name" + item.name}</p>
                  <p>{Stars(item.rating)}</p>
                  <p>{"Phone" + item.phone}</p>
                  <p>{item.type}</p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        </div>
        <div className="container-under-Maps">
          <div className="box-1">
          <div className="container-under-Maps-adresse-1">
            <h5>{item.address}</h5>
          </div>
          <div className="container-under-Maps-adresse">
            <h5>{item.phone}</h5>
          </div>
          </div>
          <div className="box-1">
          <div className="container-under-Maps-adresse">
            <h5>{item.facebook}</h5>
          </div>
          <div className="container-under-Maps-adresse">
            <h5>{item.website}</h5>
          </div>
          </div>
        </div>
        </div>
      </div>
    </>
  );
};
export default Restaurant;
