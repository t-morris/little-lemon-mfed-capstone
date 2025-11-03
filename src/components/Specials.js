import bruschetta from '../assets/bruchetta.png';
import salad from '../assets/greek salad.jpg';
import lemonDessert from '../assets/lemon dessert.jpg';
import DirectionsBikeIcon from '../assets/directions_bike.svg';

export default function Specials() {
    return (
        <div class="specials-bg">
            <div class="specials-head">
                <h2>This week's specials!</h2>
                <button>Online Menu</button>
            </div>
            <div class="grid">
                <div class="specials-card">
                    <img class="specials-card-img"  alt="" src={salad} />
                    <div class="specials-card-content">
                        <div class="specials-card-title">
                            <div class="item">Greek Salad</div>
                            <div class="price">$12.99</div>
                        </div>
                        <div class="specials-card-body">
                            The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.
                        </div>
                        <div class="specials-card-footer">
                            <p>Order a Delivery</p>
                            <img alt="" src={DirectionsBikeIcon}/>
                        </div>
                    </div>
                </div>

                <div class="specials-card">
                    <img class="specials-card-img"  alt="" src={bruschetta} />
                    <div class="specials-card-content">
                        <div class="specials-card-title">
                            <div class="item">Bruschetta</div>
                            <div class="price">$5.89</div>
                        </div>
                        <div class="specials-card-body">
                            Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.
                        </div>
                        <div class="specials-card-footer">
                            <p>Order a Delivery</p>
                            <img alt="" src={DirectionsBikeIcon}/>
                        </div>
                    </div>
                </div>

                <div class="specials-card">
                    <img class="specials-card-img"  alt="" src={lemonDessert} />
                    <div class="specials-card-content">
                        <div class="specials-card-title">
                            <div class="item">Lemon Dessert</div>
                            <div class="price">$5.00</div>
                        </div>
                        <div class="specials-card-body">
                            The comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.
                        </div>
                        <div class="specials-card-footer">
                            <p>Order a Delivery</p>
                            <img alt="" src={DirectionsBikeIcon}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
