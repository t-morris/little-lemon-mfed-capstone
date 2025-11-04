import { Link } from "react-router-dom";
import { useState } from "react";

export default function Nav() {
    const [open, setOpen] = useState(false);

    return (
        <nav>
            <div className="menu-toggle" onClick={() => setOpen(!open)}>
                <div className={`nav-burger ${open ? "open" : ""}`} alt="menu"></div>
            </div>
            <div className={open ? "menu open" : "menu"}>
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
