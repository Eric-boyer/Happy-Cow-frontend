import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, Link } from "react-router-dom";

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
        console.log(data.length);
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
    <div>
      {data.map((item) => {
        return <div>{item.name}</div>;
      })}
    </div>
  );
};
export default Recherche;
