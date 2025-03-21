import styles from "../styles/navbar.module.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext"
import PropTypes from "prop-types";
import { useContext } from "react";
import { ModeContext } from "../contexts/ModeContext";

const Navbar = () => {
  const { mode, toggleMode } = useMode();
  const { isLogin, handleOutput}

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
      <button onClick={toggleMode}>
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