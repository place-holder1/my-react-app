import '../styles/navbar.css'
import styles from '../styles/card.module.css'

const Navbar = () => {
    return (
        <nav className={`${styles["navbar"]} section`}>
            <ul>
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Profiles</a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;