import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../components/Slider.css";
import Vache from "../assets/img/Vache.jpeg";
import Recette from "../assets/img/Recette.jpeg";
import vivevegan from "../assets/img/vivevegan.jpeg";

const Slider = () => {
  return (
    <Carousel
      autoPlay
      infiniteLoop
      thumbWidth={160}
      showIndicators={false}
      showStatus={false}
    >
      <div className="div-containt-image-slide">
        <img className="image-slider" src={Vache} alt="" />
        <div className="overlay">
          <h2 className="overlay__title"> WELCOME TO HAPPY COW</h2>
          <p className="overlay__text">
            If vegetarians eat vegetables, what do humanitarians eat?
          </p>
        </div>
      </div>
      <div className="div-containt-image-slide">
        <img className="image-slider" src={Recette} />
        <div className="overlay">
          <h2 className="overlay__title"> WELCOME TO HAPPY COW</h2>
          <p className="overlay__text">
            "The standard diet of a meat-eater is blood, flesh, veins, muscles,
            tendons, cow secretions,hen periods and bee vomit. And once a year
            during a certain holiday in November, meat-eaters use the
            hollowed-out rectum of a dead bird as a pressure cooker for
            stuffing. And people think vegans are weird because we eat tofu? -
            vegan bodybuilder Robert Cheeke"
          </p>
        </div>
      </div>
      <div className="div-containt-image-slide">
        <img className="image-slider" src={vivevegan} />
        <div className="overlay">
          <h2 className="overlay__title"> WELCOME TO HAPPY COW</h2>
          <p className="overlay__text">Why did the tomato blush? - Because he saw the salad, dressing</p>
        </div>
      </div>
    </Carousel>
  );
};

export default Slider;
