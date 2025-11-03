import MainAbout from './MainAbout.js';
import Testimonials from './Testimonials.js';
import Specials from './Specials.js';
import Hero from './Hero.js';

export default function Main() {
    return (
        <main>
            <Hero />
            <Specials />
            <Testimonials />
            <MainAbout />
        </main>
    )
}
