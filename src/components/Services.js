import React from 'react';
import { Sparkles, Activity, Smile, Waves, Scissors, Coffee } from 'lucide-react';
const SERVICES_DATA = [
  {
    id: 1,
    title: "Massage Therapy",
    price: "NPR 4,500",
    duration: "60 Mins",
    icon: <Sparkles className="service-icon" />,
    image: "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&w=600&q=80",
    desc: "A rhythmic, full-body fusion treatment engineered to dissolve muscle tension and balance internal energy."
  },
  {
    id: 2,
    title: "Luxury Jacuzzi ",
    price: "NPR 5,500",
    duration: "90 Mins",
    icon: <Waves className="service-icon" />,
    image: "/assets/images/jacuzii.jpg",
    desc: "Relax in our luxury 2-seater and spacious 6-seater jacuzzi, set in elegant private rooms for a comfortable and soothing wellness experience for couples or groups."
  },
  {
    id: 3,
    title: "Steam & Sauna",
    price: "NPR 2,000",
    duration: "45 Mins",
    icon: <Activity className="service-icon" />,
    image: "/assets/images/saunasteam.jpg",
    desc: "Rejuvenate your body and mind with our premium steam and sauna therapy, designed to relax muscles, detoxify the body, and restore natural balance in a calm and soothing environment."
  },
    {
    id: 4,
    title: "Hair Salon",
    price: "NPR 2,000",
    duration: "45 Mins",
    icon: <Scissors className="service-icon" />,
    image: "/assets/images/hairsaloon.jpeg",
    desc: "Professional grooming and styling services for both men and women, delivered in a modern, comfortable, and stylish environment."
  },
    {
    id: 5,
    title: "Juice & Coffee Bar",
    price: "NPR 2,000",
    duration: "45 Mins",
    icon: <Coffee className="service-icon" />,
    image: "/assets/images/juicebar.jpg",
    desc: "Enjoy freshly prepared juices and premium coffee in a relaxing space designed to refresh and energize your wellness experience."
  }
];

export default function Services() {
  return (
    <section className="services-section">
      <div className="section-header">
        <h2>Our Healing Therapies</h2>
        <div className="section-divider"></div>
        <p>Carefully tailored experiences to bring you back into complete alignment.</p>
      </div>

      <div className="services-grid">
        {SERVICES_DATA.map((service) => (
          <div key={service.id} className="service-card">
            <div className="card-image-wrapper">
              <img src={service.image} alt={service.title} className="card-image" />
              {/* <div className="card-badge">{service.duration}</div> */}
            </div>
            <div className="card-body">
              <div className="card-title-row">
                {service.icon}
                <h3>{service.title}</h3>
              </div>
              <p className="card-text">{service.desc}</p>
              {/* <div className="card-footer">
                <span className="card-price">{service.price}</span>
                <a href="#about" className="card-action-btn">Book Appointment</a>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}