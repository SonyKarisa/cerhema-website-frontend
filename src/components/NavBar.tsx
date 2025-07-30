import {Link} from 'react-router-dom';
//import logoBlack from '../assets/logoBlack.svg';
import logoWhite from '../assets/logoWhite.svg';
import styles from '../style/NavBar.module.css';
function NavBar(){
    return(
        <nav className={styles.navbar} >
            <Link to="/">
                <img src={logoWhite} alt="CeRhema Church logo" className={styles.logo} />
            </Link>
            <ul className={styles.ListStyle}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Services">Services</Link>
                </li>
                <li>
                    <Link to="/Events">Events</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link to="/Media">Media</Link>
                </li>
                <li>
                    <Link to="/FAQ">FAQ</Link>
                </li>
                <li>
                    <Link to="/SignUp">SignUp</Link>
                </li>
            </ul>
      </nav>
    )
}
export default NavBar;