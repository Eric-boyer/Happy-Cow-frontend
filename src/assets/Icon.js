import healthstore from "./img/healthstore.webp";
import icecream from "./img/icecream.webp";
import other from "./img/other.jpeg";
import veganImage from "../assets/img/veganImage.jpeg";

import vegetatian from "../assets/img/vegetatian.jpeg";
import vegoption from "../assets/img/vegoption.jpeg";
import professional from "../assets/img/healthstore.webp";


const Icon = (type) => {
   
      if (type === "Veg Store") {
        return (
          <img style={{ height: "40px" }} src={healthstore} alt="vegstore-logo" />
        );
      }
      if (type === "vegan") {
        return <img style={{ height: "60px" }} src={icecream} alt="vegan-logo" />;
      }
      if (type === "vegetarian") {
        return (
          <img style={{ height: "40px" }} src={other} alt="vegetarian-logo" />
        );
      }
      if (type === "veg-options") {
        return <img style={{ height: "40px" }} src={veganImage} alt="" />;
      }
      // if (type === "Ice Cream") {
      //   return (
      //     <img style={{ height: "40px" }} src={vegstore} alt="ice-cream logo" />
      //   );
      // }
      if (type === "Other") {
        return <img style={{ height: "40px" }} src={vegetatian} alt="other logo" />;
      }
      if (type === "Health Store") {
        return (
          <img
            style={{ height: "40px" }}
            src={vegoption}
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