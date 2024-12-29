import Navbar from "./Navbar";
import BannerBackground from "../assets/home-banner-background.png";
import BannerImage from "../assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-conatiner">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="imagem de fundo do home container" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Seu Donut Favorito Entregue Em Sua Casa
          </h1>
          <p className="primary-text">
            Diversos sabores deleciosos para adoçar seus melhores momentos, Peça
            já o seu e receba um mimo surpresa.
          </p>
          <button className="secondary-button">
            Faça seu pedido
            <FiArrowRight />{" "}
          </button>
          <p className="primary-text">
            Ou venha comer consco em um ambiente climatizado e aconchegante com
            várias opções para seu pedido.
          </p>
        </div>
        <div className="home-image-section">
          <div className="home-primary-image">
            <img src={BannerImage} alt="donut's" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
