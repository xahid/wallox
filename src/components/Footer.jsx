import React from 'react'

import '../assets/vendors/jquery/jquery-3.7.0.min.js'
import '../assets/vendors/bootstrap/js/bootstrap.bundle.min.js'
import '../assets/vendors/bootstrap-select/bootstrap-select.min.js'
import '../assets/vendors/jarallax/jarallax.min.js'
import '../assets/vendors/jquery-ui/jquery-ui.js'
import '../assets/vendors/jquery-ajaxchimp/jquery.ajaxchimp.min.js'
import '../assets/vendors/jquery-appear/jquery.appear.min.js'
import '../assets/vendors/jquery-circle-progress/jquery.circle-progress.min.js'
import '../assets/vendors/jquery-magnific-popup/jquery.magnific-popup.min.js'
import '../assets/vendors/jquery-validate/jquery.validate.min.js'
import '../assets/vendors/nouislider/nouislider.min.js'
import '../assets/vendors/tiny-slider/tiny-slider.js'
import '../assets/vendors/wnumb/wNumb.min.js'
import '../assets/vendors/owl-carousel/js/owl.carousel.min.js'
import '../assets/vendors/slick-carousel/slick.min.js'
//import '../assets/vendors/wow/wow.js'
//import '../assets/vendors/imagesloaded/imagesloaded.min.js'
//import '../assets/vendors/isotope/isotope.js'
//import '../assets/vendors/countdown/countdown.min.js'
import '../assets/vendors/jquery-circleType/jquery.circleType.js'
import '../assets/vendors/jquery-lettering/jquery.lettering.min.js'
//import '../assets/vendors/gsap/splittext.min.js'
//import '../assets/vendors/gsap/ScrollTrigger.min.js'
//import '../assets/vendors/gsap/gsap.js'
//import '../assets/js/wallox-gsap.js'
import '../assets/js/wallox.js'

export default function Footer() {
  return (
    <>
    <div class="page-wrapper">
    <footer className="main-footer">
    <div
      className="main-footer__bg"
      style={{ backgroundImage: "url(images/shapes/footer-bg-1-1.png)" }}
    />
    <div
      className="main-footer__top wow fadeInUp"
      data-wow-duration="1500ms"
      data-wow-delay="300ms"
    >
      <div className="container">
        <div className="main-footer__top__inner">
          <div className="main-footer__logo">
            <a href="index.html" className="footer-logo">
              <img
                src="images/logo-footer.png"
                width={202}
                alt="Wallox HTML Template"
              />
            </a>
          </div>
          <div className="main-footer__form">
            <div className="main-footer__form__item">
              <form
                action="#"
                data-url="MAILCHIMP_FORM_URL"
                className="main-footer__form__newsletter mc-form"
              >
                <span className="icon-email main-footer__form__newsletter__icon" />
                <input type="text" name="EMAIL" placeholder="your email" />
                <button type="submit" className="wallox-btn">
                  Subscribe Now
                </button>
              </form>
              <div className="mc-form__response" />
            </div>
          </div>
          <div className="main-footer__social">
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
    <div className="main-footer__middle">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-xl-4">
            <div
              className="footer-widget footer-widget--about wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <h2 className="footer-widget__title bw-split-in-right">About Us</h2>
              <p className="footer-widget__text">
                Morem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elita Florai
                Psum Dolor Sit Amet, Consecteture.Borem Ipsum Dolor
              </p>
              <a href="team.html" className="wallox-btn footer-widget__btn">
                get consultant <i className="icon-up-right-arrow1" />
              </a>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div
              className="footer-widget footer-widget--links wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <h2 className="footer-widget__title bw-split-in-right">
                Explore Links
              </h2>
              <ul className="footer-widget__links list-unstyled">
                <li>
                  <i className="fas fa-circle" />
                  <a href="/about"> About us</a>
                </li>
                <li>
                  <i className="fas fa-circle" />
                  <a href="/contact"> Contact us</a>
                </li>
                <li>
                  <i className="fas fa-circle" />
                  <a href="/team"> Our Team</a>
                </li>
                <li>
                  <i className="fas fa-circle" />
                  <a href="/services"> Our Services</a>
                </li>
                <li>
                  <i className="fas fa-circle" />
                  <a href="/project"> Latest Projects</a>
                </li>
                <li>
                  <i className="fas fa-circle" />
                  <a href=""> Latest news</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-xl-2">
            <div
              className="footer-widget footer-widget--service wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="500ms"
            >
              <h2 className="footer-widget__title bw-split-in-right">
                Our Services
              </h2>
              <ul className="footer-widget__links list-unstyled">
                <li>
                  <i className="fas fa-circle" />
                  <a href="">Room Wallpapers</a>
                </li>
                <li>
                  <i className="fas fa-circle" />
                  <a href="">Wall Painting</a>
                </li>
                <li>
                  <i className="fas fa-circle" />
                  <a href="">Wall Sheets</a>
                </li>
                <li>
                  <i className="fas fa-circle" />
                  <a href="">Outdoor Design</a>
                </li>
                <li>
                  <i className="fas fa-circle" />
                  <a href="">PVC Panels</a>
                </li>
                <li>
                  <i className="fas fa-circle" />
                  <a href="">Interior Designing</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-xl-3">
            <div
              className="footer-widget footer-widget--contact wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="700ms"
            >
              <h2 className="footer-widget__title bw-split-in-right">
                Contact Us
              </h2>
              <ul className="list-unstyled footer-widget__info">
                <li>
                  <i className="icon-maps-and-flags" />
                  <p className="footer-widget__contact__text">
                    901 N Pitt Str., Suite 170 <br /> Alexandria, USA
                  </p>
                </li>
                <li>
                  <i className="icon-telephone" />
                  <a
                    href="tel:406-555-0120"
                    className="footer-widget__contact__link"
                  >
                    (406) 555-0120
                  </a>
                </li>
                <li>
                  <i className="icon-message" />
                  <a
                    href="mailto:info@wallox.com"
                    className="footer-widget__contact__link"
                  >
                    info@wallox.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="main-footer__bottom">
      <div className="container">
        <div
          className="main-footer__bottom__inner wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="300ms"
        >
          <p className="main-footer__copyright">
            {" "}
            © Copyright <span className="dynamic-year" /> by Wallox HTML Template.{" "}
          </p>
        </div>
      </div>
    </div>
  </footer>
  </div>


  <div className="mobile-nav__wrapper">
    <div className="mobile-nav__overlay mobile-nav__toggler" />
    {/* /.mobile-nav__overlay */}
    <div className="mobile-nav__content">
      <span className="mobile-nav__close mobile-nav__toggler">
        <i className="fa fa-times" />
      </span>
      <div className="logo-box">
        <a href="index.html" aria-label="logo image">
          <img
            src="images/logo-light.png"
            width={155}
            alt=" wallox image"
          />
        </a>
      </div>
      {/* /.logo-box */}
      <div className="mobile-nav__container" />
      {/* /.mobile-nav__container */}
      <ul className="mobile-nav__contact list-unstyled">
        <li>
          <i className="fa fa-envelope" />
          <a href="mailto:needhelp@wallox.com">needhelp@wallox.com</a>
        </li>
        <li>
          <i className="fa fa-phone-alt" />
          <a href="tel:666-888-0000">666 888 0000</a>
        </li>
      </ul>
      {/* /.mobile-nav__contact */}
      <div className="mobile-nav__social">
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
      {/* /.mobile-nav__social */}
    </div>
    {/* /.mobile-nav__content */}
  </div>
  {/* /.mobile-nav__wrapper */}
  <div className="search-popup">
    <div className="search-popup__overlay search-toggler" />
    {/* /.search-popup__overlay */}
    <div className="search-popup__content">
      <form
        role="search"
        method="get"
        className="search-popup__form"
        action="#"
      >
        <input type="text" id="search" placeholder="Search Here..." />
        <button
          type="submit"
          aria-label="search submit"
          className="wallox-btn wallox-btn--base"
        >
          <span>
            <i className="icon-search" />
          </span>
        </button>
      </form>
    </div>
    {/* /.search-popup__content */}
  </div>
  <a href="#" data-target="html" className="scroll-to-target scroll-to-top">
    <span className="scroll-to-top__text">back top</span>
    <span className="scroll-to-top__wrapper">
      <span className="scroll-to-top__inner" />
    </span>
  </a>
</>

  
  )
}
