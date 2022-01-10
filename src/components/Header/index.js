// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-container">
    <img
      className="nav-image"
      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
      alt="website logo"
    />
    <div className="nav-content-container">
      <ul className="nav-content-container">
        <Link to="/" className="link-style">
          <li className="list-item-style">Home</li>
        </Link>
        <Link to="/product" className="link-style">
          <li className="list-item-style">Products</li>
        </Link>
        <Link to="/cart" className="link-style">
          <li className="list-item-style">Cart</li>
        </Link>
      </ul>
      <button className="header-button-style" type="button">
        Logout
      </button>
    </div>
  </nav>
)

export default Header
