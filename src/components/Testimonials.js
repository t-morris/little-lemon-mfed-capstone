import star from '../assets/8fab66317d6c35dc211a165dbc3735e15466ae68.png';
import { useState, useEffect } from "react";
import { testimonials } from "./testimonialsData";

export default function Testimonials() {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    // Shuffle and take 3
    const shuffled = [...testimonials].sort(() => 0.5 - Math.random());
    setSelected(shuffled.slice(0, 3));
  }, []); // Run only once when the component mounts

  return (
    <div className="testimonials-bg">
      <h2>Testimonials</h2>
      <div className="testimonials grid">
        {selected.map((t, i) => (
          <div className="ts-card" key={i}>
            <div className="ts-card-title">
              <div className="name">{t.name}</div>
              <div>
                {[...Array(t.stars)].map((_, i) => (
                  <img key={i} className="star" alt="" src={star} />
                ))}
              </div>
            </div>
            <div className="ts-card-body">
              <img className="ts-card-img" alt={t.name} src={t.image} />
              <div className="ts-testtxt">“{t.text}”</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
