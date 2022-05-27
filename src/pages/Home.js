import data from "../assets/data.json";
import { Link } from "react-router-dom";
import Vegan from "../assets/img/Vegan.jpeg";
import { useState } from "react";

const Home = () => {
  


  return (
    <>
      <img className="Vg-picture-Home" src={Vegan} />
      <input placeholder="Shearch" className="input-inside-picture"></input>
      <div className="container">
        {data.map((item, index) => {
          console.log(item);
          return (
            <div className="name-thumbail-description-container" key={index}>
              <div className="name-thumbnail">
                <p>{item.name}</p>
                <Link  to="/restaurant" state={{item}}>
                  <div className="picture-div">
                    <img
                      className="thumbnain-picture"
                      src={item.thumbnail}
                      alt=""
                    />
                  </div>
                </Link>
              </div>

              <div className="div-description">
                <p className="description">{item.description}</p>
                <p>{item.rating}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Home;
