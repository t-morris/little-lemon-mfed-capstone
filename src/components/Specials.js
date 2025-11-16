import DirectionsBikeIcon from '../assets/directions_bike.svg';
import { menu } from "./menuData";
import { Link } from "react-router-dom";

export default function Specials() {
    return (
        <div className="specials-bg">
            <div className="specials-head">
                <h2>This week's specials!</h2>
                <Link to="/menu"><button>Online Menu</button></Link>
            </div>
            <div className="grid">
                {menu.specials.map((item) => (
                <div className="specials-card" key={item.id}>
                    <img className="specials-card-img" alt={item.name} src={item.image} />
                    <div className="specials-card-content">
                    <div className="specials-card-title">
                        <div className="item">{item.name}</div>
                        <div className="price">{item.price}</div>
                    </div>
                    <div className="specials-card-body">{item.description}</div>
                    <div className="specials-card-footer">
                        <p>Order a Delivery</p>
                        <img alt="Delivery" src={DirectionsBikeIcon} />
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    )
}
