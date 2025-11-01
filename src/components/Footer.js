import FootLogo from '../assets/littlelemon_logo_portrait.png';

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
                        <li><a href="">Instagram</a></li>
                        <li><a href="">Facebook</a></li>
                        <li><a href="">TikTok</a></li>
                        <li><a href="">Twitter</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
