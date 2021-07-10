import React from 'react'

const Footer = () => {
    return (
        <footer className="page-footer">
        <ul className="social">
          <li><a href="www.facebook.com"><i className="fa fa-facebook-f fa-lg"></i></a></li>
          <li><a href="www.instagram.com"><i className="fa fa-instagram fa-lg"></i></a></li>
          <li><a href="www.twitter.com"><i className="fa fa-twitter fa-lg"></i></a></li>
        </ul>
        <div className="footer-grid">
          <nav aria-label="Legal">
            <ul className="legal">
              <li></li>
              <li><a href="#">Terms of Use</a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Accessibility</a></li>
            </ul>
          </nav>
        </div>
        <div><p className="copyright">&copy; Copyright, 2021.</p></div>
      </footer>
	)
}

export default Footer