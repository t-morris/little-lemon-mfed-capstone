import { Link } from "react-router-dom";

export default function Hero() {
    return (
        <section className="hero-bg">
            <div className="hero-content grid">
                <div className="hero-text">
                    <h1>Little Lemon</h1>
                    <h3>Chicago</h3>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to="/bookings"><button>Reserve a Table</button></Link>
                </div>
                <div className="hero-img"></div>
            </div>
        </section>
    )
}