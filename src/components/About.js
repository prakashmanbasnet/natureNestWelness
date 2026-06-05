import React from 'react';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function About() {
  return (
    <section className="about-section">
      <div className="about-grid">
        <div className="about-info">
          <h2>About Our Sanctuary</h2>
          <div className="section-divider-left"></div>
                <p>
                    Nature Nest Wellness is a premium wellness destination designed to provide relaxation, comfort, and rejuvenation in a luxurious setting. Inspired by the high standards of Nepal's finest wellness and leisure facilities, we offer exceptional amenities including steam rooms, saunas, private jacuzzis, couple's jacuzzis, spa suites with attached bathrooms, and elegant rooms furnished with premium-quality beds for maximum comfort.
                </p>

                <p>
                    Our facility features a spacious 6-seater high-feature jacuzzi, creating the perfect environment for individuals, couples, friends, and families seeking a memorable wellness experience. Guests can also enjoy our modern-designed hair salon, where professional grooming and styling services are provided in a sophisticated and comfortable atmosphere.
                </p>

                <p>
                    To further enhance your visit, we offer a refreshing juice bar serving freshly prepared healthy beverages, along with premium coffee selections that allow you to relax and recharge before or after your wellness session.
                </p>

                <p>
                    Every aspect of Nature Nest Wellness is thoughtfully designed to deliver privacy, luxury, and complete relaxation, offering a seamless blend of wellness, beauty, and hospitality. Whether you are seeking a peaceful escape, quality time with loved ones, or a complete self-care experience, Nature Nest Wellness provides an environment where comfort, elegance, and well-being come together.
                </p>
          
          <div className="contact-meta-list">
            <div className="meta-item">
              <Clock className="meta-icon" />
              <div>
                <h4>Hours of Operation</h4>
                <p>Daily: 08:00 AM – 09:00 PM</p>
              </div>
            </div>
            <div className="meta-item">
              <MapPin className="meta-icon" />
              <div>
                <h4>Our Location</h4>
                <p>Tikhedewal-14,Jupiter Marga,Lalitpur,Nepal</p>
              </div>
            </div>
          </div>
        </div>

        <div className="booking-card-wrapper">
          <div className="booking-card">
            <h3>Plan Your Visit</h3>
            <p>Connect with our front desk directly to reserve your session slots today.</p>
            
            <div className="quick-contact-box">
              <a href="tel:+97701555555" className="contact-link-row">
                <Phone size={20} />
                <span>015405700</span>
              </a>
              <a href="mailto:info@naturenest.com.np" className="contact-link-row">
                <Mail size={20} />
                <span>info@naturenest.com.np</span>
              </a>
            </div>

            <div className="notice-box">
              <p><strong>Note:</strong> We highly recommend making reservations 2-3 hours in advance to guarantee your preferred therapist choice.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}