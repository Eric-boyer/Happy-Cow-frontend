import data from "../assets/data.json";

const Home = () => {
  return (
    <div  className="caroussel-container">
      {data.map((mainname, index) => {
        console.log(mainname);
        return (
          <div key={index}>
            <div className="name-thumbail-description-container">
            <div className="name-thumbnail">
              <p>{mainname.name}</p>
              <div className="picture-div">
              <img className="thumbnain-picture" src={mainname.thumbnail} />
              </div>
            </div>
            <div>
              <p className="description">{mainname.description}</p>
            </div>
          </div>
          </div>
        );
      })}
    </div>
  );
};

export default Home;
