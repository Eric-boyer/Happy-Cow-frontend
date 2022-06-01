import categoryvegoptions from "../assets/img/category_veg-options.svg";
import categoryvegan from "../assets/img/category_vegan.svg";
import categoryvegetarian from "../assets/img/category_vegetarian.svg";
import vegoptionsmarker from "../assets/img/veg_options_marker.svg";
import veganmarker from "../assets/img/vegan_marker.svg";
import L from "leaflet";

const Marker = (type) => {
  const vegOptionsIcon = new L.Icon({
    iconUrl: categoryvegoptions,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    shadowAnchor: [20, 10],
    popupAnchor:  [-3, -76]
  });
  const VeganIcon = new L.Icon({
    iconUrl: categoryvegan,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    shadowAnchor: [20, 10],
    popupAnchor:  [-3, -76]
  });
  const VegetarianIcon = new L.Icon({
    iconUrl: categoryvegetarian,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    shadowAnchor: [20, 10],
    popupAnchor:  [-3, -76]
  });
  const VegotionMarkerIcon = new L.Icon({
    iconUrl: vegoptionsmarker,
    iconSize: [30, 30],
    iconAnchor: [15, 30],
    shadowAnchor: [20, 10],
    popupAnchor:  [-3, -76]
  });
  const VeganMarkerIcon = new L.Icon({
    iconUrl: veganmarker,
    iconSize: [30, 30],
    shadowSize:[50, 64],
    iconAnchor: [15, 30],
    shadowAnchor: [20, 10],
    popupAnchor:  [-3, -76]
  });

  if (type === "Veg Store") {
    return vegOptionsIcon;
  }else if(type === "vegan"){
      return VeganIcon
  }else if (type === "vegetarian"){
      return VegetarianIcon
  }else if(type === "veg-options"){
      return VegotionMarkerIcon
  }else {
      return VeganMarkerIcon
  }
};

export default Marker;
