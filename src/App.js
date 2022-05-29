import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Header from "./components/Header";
import Restaurant from "./pages/Restaurant";
import Recherche from "./pages/Recherche";

import { library } from "@fortawesome/fontawesome-svg-core";
import {faBarsStaggered,faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

library.add(faBarsStaggered,faMagnifyingGlass);

function App() {
  const [token, setToken] = useState(Cookies.get("userToken") || null);
  const setUser = (token) => {
    if (token) {
      // console.log("creation d'un cookies");
      Cookies.set("userToken", token);
    } else {
      console.log("suppression d'un cookies");
      Cookies.remove("userToken");
    }
    setToken(token);
    console.log("mis à jour du state token");
  };
  return (
    <Router>
      <Header token={token} setUser={setUser}/>
      <Routes>
      <Route path="/restaurant" element={<Restaurant />} />
        <Route path="/" element={<Home />} />
        <Route path="/recherche" element={<Recherche />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/signup" element={<Signup setUser={setUser} />} />
      </Routes>
    </Router>
  );
}

export default App;
