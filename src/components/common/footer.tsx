"use client"

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Contact</h3>
            <p>hello@sethkarallis.com</p>
            <p>+44 7911 123456</p>
            <p>London, UK</p>
          </div>
          
          <div className="footer-section">
            <h3>Representation</h3>
            <p>Talent Agency UK</p>
            <p>agent@talentagency.com</p>
          </div>
          
          <div className="footer-section">
            <h3>Social</h3>
            <p><a href="#" target="_blank" rel="noopener noreferrer">Instagram</a></p>
            <p><a href="#" target="_blank" rel="noopener noreferrer">IMDb</a></p>
            <p><a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Seth Karallis. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}