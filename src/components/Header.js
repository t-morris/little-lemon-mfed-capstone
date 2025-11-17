import Nav from './Nav.js';
import WideLogo from '../assets/littlelemon_logo.png';

export default function Header() {
    return (
        <header>
            {/* <a href="#main-content" className="skip-link">Skip to content</a> */}
            <img src={WideLogo} alt="Little Lemon restaurant logo" className="App-logo"/>
            <Nav />
        </header>
    )
}