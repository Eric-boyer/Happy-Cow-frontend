import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

library.add(faStar);


const DisplayStars = (num) => {
  const tab = [];
  for (let i = 1; i <= 5; i++) {
    if (i < num) {
      tab.push(
        <FontAwesomeIcon
          icon="fa-solid fa-star"
          style={{ color: "goldenrod" }}
          key={i}
        />
      );
    } else {
      tab.push(
        <FontAwesomeIcon
          icon="fa-solid fa-star"
          style={{ color: "grey" }}
          key={i}
        />
      );
    }
  }
  return tab;
};

export default DisplayStars;