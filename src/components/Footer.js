import React from 'react';

export default function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Nature Nest Wellness Center. All Rights Reserved.</p>
        <p className="footer-subtext">Tikhedewal-14,Jupiter Marga,Lalitpur,Nepal</p>
      </div>
    </footer>
  );
}