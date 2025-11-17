import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <nav aria-label="Main navigation">
            <div className="menu-toggle" onClick={() => setOpen(!open)}>
                <div className={`nav-burger ${open ? "open" : ""}`} aria-expanded={open} aria-controls="primary-menu" aria-label="Toggle navigation menu" alt="menu"></div>
            </div>
            <div id="primary-menu" className={open ? "menu open" : "menu"}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/ourstory">About</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/bookings">Reservations</Link></li>
                    <li><Link to="/delivery">Order Online</Link></li>
                    <li><Link to="/login">Login</Link></li>
                </ul>
            </div>
        </nav>
    )
}
