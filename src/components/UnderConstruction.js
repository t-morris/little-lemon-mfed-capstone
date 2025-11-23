import { Link } from "react-router-dom";

export default function UnderConstruction() {
  return (
        <>
            <div className="notfound">
                <div className="text">
                    <h3 style={{marginBottom: 1 + 'em'}}>Page Under Construction</h3>
                    <img
                        src="https://images.unsplash.com/photo-1579847188804-ecba0e2ea330?q=80&w=896&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Under Construction"
                        style={{marginBottom: 1 + 'em'}}
                        className="w-full mb-6 rounded-2xl shadow-lg object-cover hero-img"
                    />
                    <p>We're working hard to finish building this page. Please check back soon!</p>
                    <Link to="/"><button>Go home</button></Link>
                </div>
            </div>
        </>
  );
}
