import React from "react";
import "../components/Modal.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import veganKelsey from "../assets/img/veganKelsey.webp";

const Modal = ({ token, closeModal, setUser }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    try {
      event.preventDefault();
      setError("");
      const response = await axios.post(
        "http://localhost:4000/user/login",
        // "https://eric-happy-cow.herokuapp.com/user/login",

        {
          username,
          email,
          password,
        }
      );
      console.log(response.data);
      if (response.data) {
        setError("bienvenue");
        setUser(response.data.token);

        navigate("/");
      }
    } catch (error) {
      // console.log(error.message);
      // console.log(error.response.status);
      if (error.response.status === 400) {
        setError("le mail est incorrecte");
      }
    }
  };

  return (
    <>
      <div className="modalBackground">
        <div className="modal-picture-container">
          <img className="modal-image" src={veganKelsey} alt="" />
        </div>
        <div className="modalContainer">
          <div className="titleClooseBtn">
            <button onClick={() => closeModal(false)}>x</button>
          </div>
          <div className="title">
            <h4 className="title" style={{ color: "white" }}>
              Est tu sur de vouloir continuer?
              <br /> Si Oui
            </h4>
          </div>
          <div className="body-form">
            <form onSubmit={handleSignup}>
              <h4 style={{ color: "white" }}>LOG TOI</h4>
              <input
                className="input-login"
                value={username}
                placeholder="Username"
                type="texte"
                onChange={(event) => setUsername(event.target.value)}
              />
              <br />
              <input
                className="input-login"
                value={email}
                placeholder="Email"
                type="texte"
                onChange={(event) => setEmail(event.target.value)}
              />
              <br />
              <input
                className="input-login"
                value={password}
                placeholder="Password"
                type="password"
                onChange={(event) => setPassword(event.target.value)}
              />
              <br />
              <input
                className="button-login"
                onClick={() => navigate("/")}
                type="submit"
                value="se connecter"
                style={{ color: "white", backgroundColor: "gray" }}
              />
              <p className="message-error">{error}</p>
            </form>
          </div>
          <div className="footer">
            <button id="cancelBtn" onClick={() => closeModal(false)}>
              Cancel
            </button>
            <button onClick={() => navigate("/signup")}>Register</button>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Modal;
