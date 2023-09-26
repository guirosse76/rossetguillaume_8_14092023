import "./Home.scss";
import Logements from "../../data/logements.json";

import Banner from "../../components/Banner/Banner";
import Card from "../../components/Card/Card";

import imgBanner from "../../assets/images/banner.png";

function Home() {
  return (
    <>
      <Banner src={imgBanner} title="Chez vous, partout et ailleurs" />

      <section className="logements_container">
        <ul className="logements_list">
          {Logements.map(({ id, title, cover }) => (
            <Card key={id} id={id} title={title} cover={cover} />
          ))}
        </ul>
      </section>
    </>
  );
}

export default Home;
