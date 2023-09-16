import imgBanner from "../../assets/images/banner.png";
import "./Banner.scss";

function Banner() {
  return (
    <div className="Banner">
      <img src={imgBanner} alt="Banniere" className="imgBanner" />
    </div>
  );
}

export default Banner;
