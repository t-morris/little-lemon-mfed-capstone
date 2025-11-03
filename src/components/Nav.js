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
                    <li><a href="/#">Home</a></li>
                    <li><a href="/#">About</a></li>
                    <li><a href="/#">Menu</a></li>
                    <li><a href="/#">Reservations</a></li>
                    <li><a href="/#">Order Online</a></li>
                    <li><a href="/#">Login</a></li>
                </ul>
            </div>
        </nav>
    )
}
