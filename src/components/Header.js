import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../assets/img/Logo.png";
import Modal from "./Modal";
import { useState } from "react";
import { useNavigate,Link } from "react-router-dom";

const Header = ({ token, setUser }) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

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
         <Link to="/">   <img className="logo" src={Logo} alt="" /></Link>
          </div>
        </div>

        <div className="div-font">
          <FontAwesomeIcon
            className="foont1"
            icon="fa-solid fa-magnifying-glass"
            style={{ color: "#9069CD" }}
          />

          {token === null ? (
            <button
              onClick={() => {
                setOpenModal(true);
              }}
              className="box-input"
              style={{ color: "white", backgroundColor: "#9069CD" }}
            >
              Login
            </button>
          ) : (
            <button
              onClick={() => {
                setUser(null);
                navigate("/");
              }}
              className="box-input"
              style={{ color: "white", backgroundColor: "#9069CD" }}
            >
              Deconnexion
            </button>
          )}
        </div>
      </section>
     
      {openModal && <Modal closeModal={setOpenModal} />}
      
    </>
  );
};

export default Header;
