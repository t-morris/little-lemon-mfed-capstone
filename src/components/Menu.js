import { menu } from "./menuData";
import DirectionsBikeIcon from '../assets/directions_bike.svg';

export default function Menu() {
  return (
    <section className="foodmenu">
        <h1 className="page-heading">Menu</h1>
        <div className="foodmenu-bg">
            <h3>This Week’s Specials</h3>
            <div className="foodmenu-grid grid">
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

            <h3>Appetizers</h3>
            <div className="foodmenu-grid grid">
                {menu.appetizers.map((item) => (
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

            <h3>Mains</h3>
            <div className="foodmenu-grid grid">
                {menu.mains.map((item) => (
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

            <h3>Desserts</h3>
            <div className="foodmenu-grid grid">
                {menu.desserts.map((item) => (
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

            <h3>Drinks - Alcoholic</h3>
            <div className="foodmenu-grid grid">
                {menu.drinks.alcoholic.map((item) => (
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

            <h3>Drinks - Soft</h3>
            <div className="foodmenu-grid grid">
                {menu.drinks.soft.map((item) => (
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
    </section>

  );
}
