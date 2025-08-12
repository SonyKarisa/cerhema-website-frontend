import {Link} from 'react-router-dom';
import styles from '../style/FooterBar.module.css';
import instagramLogo from '../assets/Instagram_Glyph_Gradient.svg'
import youtubeLogo from "../assets/yt_icon_red_digital.png";
function Footer(){
    return(
        <footer className={styles.entireFooter} >
            <nav className={styles.footerBar} >
                <ul className={styles.ListStyle} >
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
            <nav className={styles.footerBar}>
                <ul className={styles.ListStyle}>
                    <li>
                        <Link to="https://www.instagram.com/ceyc_rhema?utm_source=ig_web_button_share_sheet&igsh=MW42cm9jajh2eG51bw=="><img src={instagramLogo} alt="Instagram logo" className={styles.logo} /></Link>
                    </li>
                    <li>
                        <Link to="https://youtube.com/@ceycrhemaottawa?si=VZFXl9FqZYftSE8G"><img src={youtubeLogo} alt="YouTube logo" className={styles.logo} /></Link>
                    </li>
                </ul>
            </nav>
             <p className={styles.centerItems}>© 2025 Christ Embassy Rhema Church</p>
        </footer>
       
      
      
    )
}
export default Footer;