import "./Home.scss";
import Logements from "../../data/logements.json";

import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import DisplayCards from "../../components/Cards/DisplayCards";
// import Cards from "../../components/Cards/Cards";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <DisplayCards />
      <Footer />
    </>
  );
}

export default Home;
