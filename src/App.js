import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Header from './components/Header.js';
import Main from './components/Main.js';
import Footer from './components/Footer.js';


function App() {
  return (
    <>
      <Router>
        <Header/>
        <Main/>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
