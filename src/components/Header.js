import React from 'react';
import logo from 'img/soldrop_logo.png'

const Header = () => {

    return (
      <header className="page-header">
			<div className="logo">
				<a href="index.html"> <img src={logo} alt="book logo" width="120" /></a>
			</div>

            <nav aria-label="Primary" class="navigation">
        <div class="menu-toggle">
          <a href="#"><i class="fas fa-bars"></i></a>
        </div>
        <ul class="menu">
          <li><a href="index.html">Home</a></li>
          <li><a href="#">Games</a>
            <ul class="submenu">
              <li><a href="#">PS5</a></li>
              <li><a href="#">PS4</a></li>
              <li><a href="#">Xbox One</a></li>
              <li><a href="#">Xbox Series</a></li>
            </ul>
          </li>
          <li><a href="#">News</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
	</header>
	)
}

export default Header