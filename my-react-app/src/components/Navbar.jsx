import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ mode, updateMode }) => {
  return (
    <nav className={`${styles["navbar"]}`}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
        <Link to="/about">About</Link>
        </li>
        <li>
        <Link to="/add-profile">Add Profile</Link>
        </li>
      </ul>
      <button onClick={updateMode}>
        {mode === "light" ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

Navbar.propTypes = {
    mode: PropTypes.string,
    updateMode: PropTypes.string,
}

export default Navbar;