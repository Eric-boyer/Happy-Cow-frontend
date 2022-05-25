import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("eric5@mail.com");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (event) => {
    try {
      event.preventDefault();
      setError("");
      const response = await axios.post("http://localhost:4000/user/signup", {
        username,
        email,
        password,
        confirmpassword,
      });
      console.log(response.data);
      if (response.data) {
        console.log("j'ai réussi ma création");
        setUser(response.data.token);
        navigate("/");
      }
    } catch (error) {
      console.log(error.message);
      console.log(error.response.status);
      if (error.response.status === 400) {
        setError("le mail est déja occupé");
      }
    }
  };

  return (
    <form className="register-box" onSubmit={handleSignup}>
      <p>SIGNUP</p>
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
        type="email"
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
      <input
        value={confirmpassword}
        placeholder="Confirm-Password"
        type="password"
        onChange={(event) => setConfirmpassword(event.target.value)}
      />
      <br />
      <button className="butt-sign"> se connecter</button>
      <p className="message-error">{error}</p>
    </form>
  );
};

export default Signup;
