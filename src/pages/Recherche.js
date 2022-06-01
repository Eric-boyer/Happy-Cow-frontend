import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import MarkerIcon from "../assets/MarkerIcon";
import Stars from "../components/Stars";
import data from "../assets/data.json";

const Recherche = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const location = useLocation();
  const { state } = location;

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const response = await axios.get(
          "https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json"
        );
        if (state) {
          const filteredData = response.data.filter((item) => {
            return item.name.toLowerCase().includes(state.toLowerCase());
          });
          setData(filteredData);
        } else {
          setData(response.data);
        }

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchdata();
  }, [state]);

  return isLoading ? (
    <div>en cours...</div>
  ) : (
    <>
      {console.log(data)}
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
          <Marker
            position={[data[0].location.lat, data[0].location.lng]}
            icon={MarkerIcon(data[0].type)}
          >
            <Popup position={[data[0].location.lat, data[0].location.lng]}>
              <div>
                <p>{"Name" + data[0].name}</p>
                <p>{Stars(data[0].rating)}</p>
                <p>{"Phone" + data[0].phone}</p>
                <p>{data[0].type}</p>
              </div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
      {data.map((item) => {
        return (
          <>
            <div>{item.name}</div>
            <div className="caroussel-restaurant">
              {item.pictures.map((picture, index) => {
                return (
                  <div className="container-inside-caroussel">
                    {/* {longdescription[longdescription.length-2]}  */}
                    <img
                      style={{
                        width: 270,
                        height: 270,
                        borderRadius: 5,
                        objectFit: "cover",
                      }}
                      key={index}
                      src={picture}
                      alt=""
                    />
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
    </>
  );
};
export default Recherche;
