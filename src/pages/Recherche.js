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
        }else{
            setData(response.data);
          const tab = [];
          for (let i=0; i < response.data.length; i++) {
            if (tab.indexOf(response.data[i].type) === -1) {
              tab.push(response.data[i].type);
            }
          }

          console.log(tab);
        }
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchdata();
  }, [state]);

  return isLoading ? <div>en cours...</div> : <div>ok <p></p></div>
};
export default Recherche;