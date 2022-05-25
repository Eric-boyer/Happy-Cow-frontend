import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/img/Logo.png";
import Modal from "./Modal";
import { useState } from "react";

const Header = () => {
const [openModal, setOpenModal]= useState(false);

  return (
      <>
    <section className="header-container">
      <div className="div-font">
        <FontAwesomeIcon
        type="button"
        
          className="foont"
          icon="fa-solid fa-bars-staggered"
          style={{ color: "grey" }}
        />
        <div className="div-logo">
          <img className="logo" src={Logo} alt="" />
        </div>
      </div>
      <div className="div-font">
        <FontAwesomeIcon
          className="foont1"
          icon="fa-solid fa-magnifying-glass"
          style={{ color: "#9069CD" }}
        />
        <button onClick={()=>{setOpenModal(true)}}
          className="box-input"
          style={{ color: "white", backgroundColor: "#9069CD" }}
        >
          Login / Join
        </button>
        
      </div>
      
    </section>
    {openModal&& <Modal closeModal={setOpenModal}/>}
    </>
  );
};

export default Header;
