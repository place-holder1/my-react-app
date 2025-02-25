// import img from '../assets/warm.png'
import style from '../styles/card.module.css';
import PropTypes from "prop-types";

const Card = ({ img, name, title, animate, updateAnimate }) => {
    return (
      <div
        className={`${style["profile-card"]} ${
          animate ? style["is-entering"] : ""
        }`}
        onAnimationEnd={updateAnimate}
      >
        <div className={style["profile-card__image"]}>
          <img src={img} alt={name} />
        </div>
        <div className={style["profile-card__content"]}>
          <p>{name}</p>
          <p>{title}</p>
          <p>
            {/* <a href={`mailto:${email}`}>{email}</a> */}
          </p>
        </div>
      </div>
    );
  };

Card.propTypes = {
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    email: PropTypes.string.isRequired,
    animate: PropTypes.bool,
    updateAnimate: PropTypes.function,

}

export default Card;