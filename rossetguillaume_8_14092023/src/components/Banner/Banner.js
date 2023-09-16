import imgBanner from "../../assets/images/banner.png";
import "./Banner.scss";

function Banner() {
  return (
    <div className="Banner">
      <h1 class="banner_title">Chez vous, partout et ailleurs</h1>
      <img src={imgBanner} alt="Banniere" className="imgBanner" />
    </div>
  );
}

export default Banner;
