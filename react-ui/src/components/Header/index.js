import React from 'react'
import logoImg from '../../img/18278933_162250020973101_7058659875497714241_o.jpg'
import style from './styles.module.scss'

export const Header = (props) => {
  return (
    <header className="header-section" >
      <div className="header-top" style={{backgroundColor: '#fff'}}>
        <div className="container">
          <div className="row">
            <div className="col-lg-2 text-center text-lg-left" style={{position: 'relative'}}>
              <a href="./index.html" className={`${style['site-logo']} site-logo`}>
                <img src={logoImg} alt="" height="60"/>
              </a>
            </div>
            <div className="col-xl-6 col-lg-5">
              <form className="header-search-form">
                <input type="text" placeholder="Search on divisima ...." />
                <button><i className="flaticon-search"></i></button>
              </form>
            </div>
            <div className="col-xl-4 col-lg-5">
              <div className="user-panel">
                <div className="up-item">
                  <i className="flaticon-profile"></i>
                  <a href="#">Sign</a> In or <a href="#">Create Account</a>
                </div>
                <div className="up-item">
                  <div className="shopping-card">
                    <i className="flaticon-bag"></i>
                    <span>0</span>
                  </div>
                  <a href="#">Shopping Cart</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav className="main-navbar">
        <div className="container">
          <ul className="main-menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Jewelry
						<span className="new">New</span>
            </a></li>
            <li><a href="#">Shoes</a>
              <ul className="sub-menu">
                <li><a href="#">Sneakers</a></li>
                <li><a href="#">Sandals</a></li>
                <li><a href="#">Formal Shoes</a></li>
                <li><a href="#">Boots</a></li>
                <li><a href="#">Flip Flops</a></li>
              </ul>
            </li>
            <li><a href="#">Pages</a>
              <ul className="sub-menu">
                <li><a href="./product.html">Product Page</a></li>
                <li><a href="./category.html">Category Page</a></li>
                <li><a href="./cart.html">Cart Page</a></li>
                <li><a href="./checkout.html">Checkout Page</a></li>
                <li><a href="./contact.html">Contact Page</a></li>
              </ul>
            </li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}