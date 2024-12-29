import { AiFillStar } from "react-icons/ai";
import ProfilePic from "../assets/130776894.jpg";

const Testestimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Avaliação</p>
        <h1 className="primary-heading">O que dizem sobre nós</h1>
        <p className="primary-text">
          Nossos clientes adoram a qualidade e o sabor dos nosso donuts, Cada
          mordida é uma explosão de sabor que traz alegria e satisfação. Estamos
          sempre recebendo elogios pela variedade de sabores que oferecenmos.
        </p>
      </div>
      <div className="testimonial-section-botton">
        <img src={ProfilePic} alt="imagem do avaliador" />
        <p>
          "Descobrir essa loja de donuts foi uma das melhores coisas que
          aconteceram! Os donuts são sempre frescos, macios e incrivelemnte
          saborosos. O atendimento é excelente, e a entrega é sempre pontual.
          Recomendo para todos que querem uma experiência deliciosa e
          memorável."
        </p>

        <div className="testimonials-star-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Gustavo Codeço</h2>
      </div>
    </div>
  );
};

export default Testestimonial;
