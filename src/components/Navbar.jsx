import { Link } from "react-router-dom";
import styles from '../styles/Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul className={styles.navList}>
                <li>
                    <Link to="/" className={styles.navLink}>Home</Link>
                </li>
                <li>
                    <Link to="/quiz" className={styles.navLink}>Quiz</Link>
                </li>
                <li>
                    <Link to="/about" className={styles.navLink}>About</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;