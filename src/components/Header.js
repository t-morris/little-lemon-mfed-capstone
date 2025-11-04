import Nav from './Nav.js';
import WideLogo from '../assets/littlelemon_logo.png';

export default function Header() {
    return (
        <header>
            <img src={WideLogo} alt="Logo" class="App-logo"/>
            <Nav />
        </header>
    )
}