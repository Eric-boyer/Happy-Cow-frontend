import data from "../assets/data.json";
import { Link } from "react-router-dom";
import Vegan from "../assets/img/Vegan.jpeg";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {

  
    const [data, setData] = useState();
    const [isloading, setIsloading] = useState(true);
     const [name, setName] = useState("");

     
    useEffect(() => {
      const fetchdata = async () => {
        try {
          const response = await axios.get(
            `https://res.cloudinary.com/lereacteur-apollo/raw/upload/v1575242111/10w-full-stack/Scraping/restaurants.json?name=${name}`
          );
          console.log(response.data);
          setData(response.data);
          setIsloading(false);
        } catch (error) {
          console.log(error.response.data);
        }
      };
  
      fetchdata();
    }, [name]);

    return isloading === true ? (
      <div > <p className="charging">En cours de chargement...</p></div>
    ) : (
    <>
      <img className="Vg-picture-Home" src={Vegan} />
      <input placeholder="Shearch" className="input-inside-picture" onChange={(event) => {
      setName(event.target.value);
    }}></input>
      <div className="container">
        {data.map((mainname, index) => {
          console.log(mainname);
          return (
            <div className="name-thumbail-description-container" key={index}>
              <div className="name-thumbnail">
                <p>{mainname.name}</p>
                <Link to="/restaurant">
               
                  <div className="picture-div">
                    <img
                      className="thumbnain-picture"
                      src={mainname.thumbnail}
                      alt=""
                    />
                  </div>
                </Link>
              </div>

              <div className="div-description">
                <p className="description">{mainname.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
