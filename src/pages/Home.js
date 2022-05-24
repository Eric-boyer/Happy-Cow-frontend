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
            <img src={mainname.thumbnail}/>
            <p>{mainname.description}</p>
            {/* {mainname.pictures.map((picture, index) => {
              return <img key={index} src={} alt="" />;
            })} */}
           
          </div>
        );
      })}
    </div>
   
  );
};

export default Home;
