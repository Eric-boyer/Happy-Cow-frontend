import data from "../assets/data.json";

const Home = () => {
  // console.log(data);
  return (
    <div>
      {data.map((mainname, index) => {
        console.log(mainname);
        return (
          <div key={index}>
            <p>{mainname.name}</p>
            {mainname.pictures.map((picture, index) => {
              return <img key={index} src={picture[0]} alt="" />;
            })}
          </div>
        );
      })}
    </div>
   
  );
};

export default Home;
