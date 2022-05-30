import veganImage from "../img/category_vegan.svg";
import vegstore from "../img/vegstore-category-logo.svg";
import vegetarian from "../img/vegetatian-logo.svg";
import vegoption from "../img/veg-options-logo.svg";
import icecream from "../img/category_ice-cream.svg";
import other from "../img/category_other.svg";
import professional from "../img/category_vegan-professional.svg";
import healthstore from "../img/category_health-store.svg";


const Icon = (type) => {
    
      if (type === "Veg Store") {
        return (
          <img style={{ height: "40px" }} src={vegstore} alt="vegstore-logo" />
        );
      }
      if (type === "vegan") {
        return <img style={{ height: "40px" }} src={veganImage} alt="vegan-logo" />;
      }
      if (type === "vegetarian") {
        return (
          <img style={{ height: "40px" }} src={vegetarian} alt="vegetarian-logo" />
        );
      }
      if (type === "veg-options") {
        return <img style={{ height: "40px" }} src={vegoption} alt="" />;
      }
      if (type === "Ice Cream") {
        return (
          <img style={{ height: "40px" }} src={icecream} alt="ice-cream logo" />
        );
      }
      if (type === "Other") {
        return <img style={{ height: "40px" }} src={other} alt="other logo" />;
      }
      if (type === "Health Store") {
        return (
          <img
            style={{ height: "40px" }}
            src={healthstore}
            alt="healthstore logo"
          />
        );
      }
      if (type === "Professional") {
        return (
          <img style={{ height: "40px" }} src={professional} alt="ice-cream logo" />
        );
      }
    };
  

export default Icon;