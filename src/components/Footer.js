import FootLogo from '../assets/littlelemon_logo_portrait.png';
import Insta from '../assets/insta.svg';
import Faceb from '../assets/faceb.svg';
import Tiktk from '../assets/tiktk.svg';
import Twitt from '../assets/twitt.svg';

export default function Footer() {
    return (
        <footer>
            <img src={FootLogo} class="Foot-logo"/>
            <div class="footer-text">
                <nav>
                    <ul>
                        <li class="footer-cat">Site</li>
                        <li><a href="">Home</a></li>
                        <li><a href="">About</a></li>
                        <li><a href="">Menu</a></li>
                        <li><a href="">Reservations</a></li>
                        <li><a href="">Order Online</a></li>
                        <li><a href="">Login</a></li>
                    </ul>
                </nav>
                <div class="contact">
                    <ul>
                        <li class="footer-cat">Contact Us</li>
                        <li>2395 Maldove Way</li>
                        <li>Chicago, Illinois</li>
                        <li>60601</li>
                        <li>(555)-555-5555</li>
                        <li><a class="mailto" href="mailto:">info@littlelemon.com</a></li>
                    </ul></div>
                <div class="social">
                    <ul>
                        <li class="footer-cat">Socials</li>
                        <li><a href=""><img src={Insta} alt="Instagram" />Instagram</a></li>
                        <li><a href=""><img src={Faceb} alt="Facebook" />Facebook</a></li>
                        <li><a href=""><img src={Tiktk} alt="TikTok" />TikTok</a></li>
                        <li><a href=""><img src={Twitt} alt="Twitter" />Twitter</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
