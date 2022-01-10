// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="main-container">
    <div className="nav-container">
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
      <button type="button" className="button-small-size-devices">
        <img
          className="logout-image"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
          alt="nav logout"
        />
      </button>
    </div>
    <div className="small-device">
      <ul className="small-device-list-item-container">
        <Link to="/" className="link-style">
          <li className="list-item-style">
            <img
              className="logout-image"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
              alt="nav home"
            />
          </li>
        </Link>

        <Link to="/product" className="link-style">
          <li className="list-item-style">
            <img
              className="logout-image"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
              alt="nav product"
            />
          </li>
        </Link>

        <Link to="/cart" className="link-style">
          <li className="list-item-style">
            <img
              className="logout-image"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
              alt="nav cart"
            />
          </li>
        </Link>
      </ul>
    </div>
  </nav>
)

export default Header
