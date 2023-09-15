import "./Home.scss";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Logements from "../../data/logements.json";

function Home() {
  return (
    <>
      <Header />
      <div className="Home"></div>
      <Footer />
    </>
  );
}

export default Home;
