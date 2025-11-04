import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <div class="notfound">
                <div class="text">
                    <h3>This page doesn't exist...</h3>
                    <p>Sorry, the page you were looking for doesn't exist.</p>
                    <Link to="/"><button>Go home</button></Link>
                </div>
            </div>
        </>
    )
}
