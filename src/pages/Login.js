import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ setUser }) => {
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
        navigate("/");
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
      <button type="submit" value="se connecter" />
      <p className="message-error">{error}</p>
    </form>
  );
};

export default Login;
