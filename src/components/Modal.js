import React from "react";
import "../components/Modal.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Modal = ({ closeModal,setUser }) => {
  const [username, setUsername] = useState("eric5");
  const [email, setEmail] = useState("eric5@mail.com");
  const [password, setPassword] = useState("salut");
  const [error, setError] = useState("");
  
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    try {
      event.preventDefault();
      setError("");
      const response = await axios.post("http://localhost:4000/user/login", {
        username,
        email,
        password,
      });
      console.log(response.data);
      if (response.data) {
        console.log("j'ai réussi ma création");
         setUser(response.data.token);
        navigate("/restaurant");
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.response.status);
      if (error.response.status === 400) {
        setError("le mail est incorrecte");
      }
    }
  };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleClooseBtn">
          <button onClick={() => closeModal(false)}>x</button>
        </div>
        <div className="title">
          <h4>est tu sur de vouloir continuer? Si Oui</h4>
        </div>
        <div className="body">
          <form onSubmit={handleSignup}>
            <p>LOGIN</p>
            <input
              value={username}
              placeholder="Username"
              type="texte"
              onChange={(event) => setUsername(event.target.value)}
            />
            <br />
            <input
              value={email}
              placeholder="Email"
              type="texte"
              onChange={(event) => setEmail(event.target.value)}
            />
            <br />
            <input
              value={password}
              placeholder="Password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            />
            <br />
            <input  onClick={() => navigate("/")} type="submit" value="se connecter"  style={{ color: "white", backgroundColor: "#9069CD", }} />
            <p className="message-error">{error}</p>
          </form>
        </div>
        <div className="footer">
          <button id="cancelBtn" onClick={() => closeModal(false)}>
            Cancel
          </button>
          <button onClick={() => navigate("/")} >continuer</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
