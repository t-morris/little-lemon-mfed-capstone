import { Routes, Route } from "react-router-dom";
import Home from './Home.js';
import Bookings from "./Bookings.js";
import OurStory from "./OurStory.js";
import Menu from "./Menu.js";
import Delivery from "./Delivery.js";
import NotFound from "./NotFound.js";


export default function Main() {
    return (
        <main>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ourstory" element={<OurStory />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/delivery" element={<Delivery />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </main>
    )
}
