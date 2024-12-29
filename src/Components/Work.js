import {
  faHouseFloodWater,
  faTruck,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Work = () => {
  const WorkInfoData = [
    {
      image: <FontAwesomeIcon icon={faHouseFloodWater} />,
      title: "Feito como se fosse em casa",
      text: "Todos os nossos donuts são preparador com carinho e atenção aos detalhes, como se fossem feitos na cozinha da sua casa. Utilizando receitas tradicionais e técnicas artesanais para criar donuts frescos e saborossos, que lembram os melhores momentos em familia.",
    },
    {
      image: <FontAwesomeIcon icon={faUtensils} />,
      title: "Ingredientes Selecionados",
      text: "Escolhemos a dedo os melhores ingredientes para garantir que nosos donuts sejam sempre frescos e deliciosos. Usamos apenas produtos de alta qualidade, desde a farinha até os recheios, para proiporcionar a você uma experiência gustativa excepcional.",
    },
    {
      image: <FontAwesomeIcon icon={faTruck} />,
      title: "Entrag em toda a cidade",
      text: "Levamos nosso donuts diretamente até você, em qualquer lugar da cidade, Nossa equipe de entregas gatante que seu pedido chegue rápido e em perfeitas condições, para que você possa desfrutar de nossos donuts fresquinhos e saborosos, onde quer que esteja.",
    },
  ];

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Nosso Trabalho</p>
        <h1>Como servimos você</h1>
        <p className="primary-text">
          Nossa missão é proporcionar a você uma experiência única e deliciosa.
          Desde a seleção cuidados dos imgredientes até a entrega no seu
          endereço, cada etapa do nosso processo é pensada para garantir que
          você receba os melhores donuts da cidade. Estamos comprometidos com a
          qualidade e a satisfação de nossos clientes.
        </p>
      </div>
      <div className="work-section-bottom">
        {WorkInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">{data.image}</div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
