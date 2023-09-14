import "./Home.scss";
import Header from "../../components/Header/Header";
import Logements from "../../data/logements.json";

function Home() {
  console.log(Logements);
  return (
    <>
      {" "}
      <Header />
      <div className="App">
        <h1>Hello React</h1>
      </div>
    </>
  );
}

export default Home;
