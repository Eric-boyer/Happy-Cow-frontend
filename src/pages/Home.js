import data from "../assets/data.json";

const Home = () => {
  return (
    <div>
      {data.map((mainname, index) => {
        console.log(mainname);
        return (
          <div key={index} className="caroussel-container">
            {/* <p>{mainname.name}</p> */}
            <img className="thumbnain-picture" src={mainname.thumbnail} />
          </div>
        );
      })}
    </div>
  );
};

export default Home;
