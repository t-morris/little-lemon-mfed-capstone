import { Link } from "react-router-dom";
import FootLogo from '../assets/littlelemon_logo_portrait.png';
import Insta from '../assets/insta.svg';
import Faceb from '../assets/faceb.svg';
import Tiktk from '../assets/tiktk.svg';
import Twitt from '../assets/twitt.svg';

export default function Footer() {
    return (
        <footer>
            <img src={FootLogo} alt="Logo" className="Foot-logo"/>
            <div className="footer-text">
                <nav>
                    <ul>
                        <li className="footer-cat">Site</li>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/ourstory">About</Link></li>
                        <li><Link to="/menu">Menu</Link></li>
                        <li><Link to="/bookings">Reservations</Link></li>
                        <li><Link to="/delivery">Order Online</Link></li>
                        <li><Link to="/login">Login</Link></li>
                    </ul>
                </nav>
                <div className="contact">
                    <ul>
                        <li className="footer-cat">Contact Us</li>
                        <li>2395 Maldove Way</li>
                        <li>Chicago, Illinois</li>
                        <li>60601</li>
                        <li>(555)-555-5555</li>
                        <li><a className="mailto" href="mailto:">info@littlelemon.com</a></li>
                    </ul></div>
                <div className="social">
                    <ul>
                        <li className="footer-cat">Socials</li>
                        <li><a href="www.instagram.com"><img src={Insta} alt="Instagram" />Instagram</a></li>
                        <li><a href="www.facebook.com"><img src={Faceb} alt="Facebook" />Facebook</a></li>
                        <li><a href="www.tiktok.com"><img src={Tiktk} alt="TikTok" />TikTok</a></li>
                        <li><a href="www.twitter.com"><img src={Twitt} alt="Twitter" />Twitter</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
