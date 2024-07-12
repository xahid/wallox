import React from 'react'

import '../assets/vendors/bootstrap/css/bootstrap.min.css';
import '../assets/vendors/bootstrap-select/bootstrap-select.min.css'
import '../assets/vendors/animate/animate.min.css'
import '../assets/vendors/fontawesome/css/all.min.css'
import '../assets/vendors/jquery-ui/jquery-ui.css'
import '../assets/vendors/jarallax/jarallax.css'
import '../assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css'
import '../assets/vendors/nouislider/nouislider.min.css'
import '../assets/vendors/nouislider/nouislider.pips.css'
import '../assets/vendors/tiny-slider/tiny-slider.css'
import '../assets/vendors/wallox-icons/style.css'
import '../assets/vendors/owl-carousel/css/owl.carousel.min.css'
import '../assets/vendors/owl-carousel/css/owl.theme.default.min.css'
import '../assets/vendors/slick-carousel/slick.css'
import '../assets/vendors/slick-carousel/slick-theme.css'
import '../assets/css/wallox.css'

export default function Header() {
  return (
    <>
      <div className="page-wrapper">
  <div className="topbar-one">
    <div className="container-fluid">
      <div className="topbar-one__inner">
        <ul className="list-unstyled topbar-one__info">
          <li className="topbar-one__info__item">
            <div className="topbar-one__info__icon">
              <i className="icon-maps-and-flags" />
            </div>
            <p className="topbar-one__info__location">
              4648 Rocky Road Philadelphia PA, 1920
            </p>
          </li>
          <li className="topbar-one__info__item">
            <div className="topbar-one__info__icon">
              <i className="icon-email" />
            </div>
            <a
              href="mailto:info@wallox.com"
              className="topbar-one__info__content"
            >
              info@wallox.com
            </a>
          </li>
          <li className="topbar-one__info__item">
            <div className="topbar-one__info__icon">
              <i className="icon-telephone" />
            </div>
            <a href="tel:+88-0123-654-99" className="topbar-one__info__content">
              +88 0123 654 99
            </a>
          </li>
        </ul>
        <div className="topbar-one__right">
          <div className="topbar-one__social">
            <a href="https://facebook.com/">
              <i className="icon-facebook1" aria-hidden="true" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="https://twitter.com/">
              {" "}
              <i className="icon-twitter1" aria-hidden="true" />{" "}
              <span className="sr-only">Twitter</span>
            </a>
            <a href="https://instagram.com/">
              <i className="icon-social-media" aria-hidden="true" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="https://youtube.com/">
              <i className="icon-youtube1" aria-hidden="true" />
              <span className="sr-only">Youtube</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <header className="main-header sticky-header sticky-header--normal">
    <div className="container-fluid">
      <div className="main-header__inner">
        <div className="main-header__logo logo-wallox">
          <a href="index.html">
            <img
              src="images/logo-dark.png"
              alt="wallox HTML"
              width={202}
            />
          </a>
        </div>
        <nav className="main-header__nav main-menu">
          <ul className="main-menu__list">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/project">Project</a>
            </li>
            <li>
              <a href="/team">Our Team</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="main-header__right">
          <div className="main-header__right__info">
            <a
              href="#"
              className="search-toggler main-header__right__info__item"
            >
              <i className="icon-search" aria-hidden="true" />
            </a>
            <a href="" className="main-header__right__info__item">
              <i className="icon-cart" aria-hidden="true" />
            </a>
          </div>
          <div className="main-header__right__link">
            <a
              href="contact.html"
              className="main-header__right__btn wallox-btn"
            >
              book appointment
              <i className="icon-arrow-point-to-right" />
            </a>
          </div>
          <div className="mobile-nav__btn mobile-nav__toggler">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
    </div>
  </header>
  </div>
</>

  )
}
