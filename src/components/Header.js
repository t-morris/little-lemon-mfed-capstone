import Nav from './Nav.js';
import WideLogo from '../assets/littlelemon_logo.png';

export default function Header() {
    return (
        <header>
            <img src={WideLogo} class="App-logo"/>
            <Nav />
        </header>
    )
}