import data from "../assets/data.json";
import { Link } from "react-router-dom";
import Vegan from "../assets/img/Vegan.jpeg";
import { useEffect, useState } from "react";
import Stars from "../components/Stars";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Home = () => {
  const [search, setSearch] = useState("");
  const [recomandation, setRecomandation] = useState([]);

  useEffect(() => {
    const filterTab = data.filter((item) => {
      return item.name.toLocaleLowerCase().includes(search.toLowerCase())
    });
    // console.log(filterTab);
    setRecomandation(filterTab);
  }, [search]);

  return (
    <>
      <img className="Vg-picture-Home" src={Vegan} />
      <div>
        <input
          value={search}
          placeholder="Search"
          className="input-inside-picture"
          onChange={(event) => {
            setSearch(event.target.value);
            console.log(search)
          }}
        ></input>
        <Link to="/recherche" state={search}>
          <div className="loupe-search">
            <FontAwesomeIcon
              icon="fa-solid fa-magnifying-glass"
              style={{ color: "#9069CD" }}
            />
          </div>
        </Link>
        <div></div>
      </div>
      <div className="container">
        {recomandation.length !== 0 ? (
          <div>
            <h3>{recomandation[0].name}</h3>
            <div>
              {recomandation[0].pictures.map((picture, index) => {
                return (
                  <div className="caroussel-restaurant">
                    <div>
                      <img key={index} src={picture} alt="" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          data.map((item, index) => {
            // console.log(item);
            return (
              <div className="name-thumbail-description-container" key={index}>
                <div className="name-thumbnail">
                  <Link to="/restaurant" state={{ item }}>
                    <div className="picture-div">
                      <img
                        className="thumbnain-picture"
                        src={item.thumbnail}
                        alt=""
                      />
                    </div>
                  </Link>
                  <p>{item.name}</p>
                </div>

                <div className="div-description">
                  <p className="description">{item.descriptions}</p>
                  <p>{Stars(item.rating)}</p>
                  <p>{item.rating}</p>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};

export default Home;
