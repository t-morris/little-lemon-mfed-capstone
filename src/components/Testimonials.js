import test1 from '../assets/b64f988f077b50ffdab0afee9de4d701e4a9d5da.jpg';
import test2 from '../assets/44dd2beb0c06094368ffbb7fa1843005cfdae174.jpg';
import test3 from '../assets/3ca412176fe4306326b04a78b51fa148c49f99c1.jpg';
import star from '../assets/8fab66317d6c35dc211a165dbc3735e15466ae68.png';

export default function Testimonials() {
    return (
        <div class="testimonials-bg">
            <h2>Testimonials</h2>
            <div class="testimonials grid">
                <div class="ts-card">
                    <div class="ts-card-title">
                        <div class="name">Jon Dowe</div>
                        <div>
                            <img class="star" alt="" src={star} />
                            <img class="star" alt="" src={star} />
                            <img class="star" alt="" src={star} />
                            <img class="star" alt="" src={star} />
                            <img class="star" alt="" src={star} />
                        </div>
                    </div>
                    <div class="ts-card-body">
                        <img class="ts-card-img" alt="" src={test1} />
                        <div class="ts-testtxt">"Tempor incididunt ut labore et dolore magna aliqua."</div>
                    </div>
                </div>
                <div class="ts-card">
                    <div class="ts-card-title">
                        <div class="name">Jane Doe</div>
                        <div>
                            <img class="star" alt="" src={star} />
                            <img class="star" alt="" src={star} />
                            <img class="star" alt="" src={star} />
                            <img class="star" alt="" src={star} />
                            <img class="star" alt="" src={star} />
                        </div>
                    </div>
                    <div class="ts-card-body">
                        <img class="ts-card-img" alt="" src={test2} />
                        <div class="ts-testtxt">"In voluptate  velit esse cillum dolore eu fugiat nulla pariatur."</div>
                    </div>
                </div>
                <div class="ts-card">
                    <div class="ts-card-title">
                        <div class="name">John Doaw</div>
                        <div>
                            <img class="star" alt="" src={star} />
                            <img class="star" alt="" src={star} />
                            <img class="star" alt="" src={star} />
                            <img class="star" alt="" src={star} />
                            <img class="star" alt="" src={star} />
                        </div>
                    </div>
                    <div class="ts-card-body">
                        <img class="ts-card-img" alt="" src={test3} />
                        <div class="ts-testtxt">"Duis aute irure dolor in dolore eu fugiat nulla pariatur."</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
