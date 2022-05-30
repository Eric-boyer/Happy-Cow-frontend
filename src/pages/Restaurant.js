import Slider from "../components/Slider";
import { useLocation } from "react-router-dom";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import Stars from "../components/Stars";
import Icon from "../components/Icon";

const Restaurant = () => {
  const location = useLocation();
  const { item } = location.state;

  console.log(item);
  // const longdescription= item.description.split(",")
  return (

    <>
    <div className="div-under-header-restaurant">
    <div className="container-inside-header-restaurant">
      <h2 style={{color:"white"}}>{item.name}</h2>
    </div>
    </div>
    <div className="second-div-under-header-restaurant">
<p>{item.type}</p>
    </div>
      <Slider />
      {/* // const tab = [];
          // for (let i=0; i < response.data.length; i++) {
          //   if (tab.indexOf(response.data[i].type) === -1) {
          //     tab.push(response.data[i].type);
          //   }
          // }

          // console.log(tab); */}

      {item.pictures.map((picture, index) => {
        return (
          <div className="caroussel-restaurant">
            <div>
               {/* {longdescription[longdescription.length-2]}  */}
               
              <p>{item.description.slice(0, 200)}...</p>
              <img key={index} src={picture} alt="" />
              
            </div>
          </div>
        );
      })}
      <div>
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
      <div>hdhh</div>
    </>
  );
};
export default Restaurant;
