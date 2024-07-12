import React from 'react'

export default function Contact() {
  return (
    <div className="page-wrapper">
        <>
  <section className="page-header">
    <div
      className="page-header__bg"
      style={{
        backgroundImage: "url(/images/backgrounds/page-header-bg-1-1.jpg)"
      }}
    />
    <div className="container">
      <h2 className="page-header__title">Contact us</h2>
      <div className="wallox-breadcrumb">
        <ul className="wallox-breadcrumb__list list-unstyled">
          <li>
            <a href="index.html">
              <i className="icon-home" /> Home
            </a>
          </li>
          <li>
            <span>Contact us</span>
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section className="contact-one">
    <div className="container">
      <div className="row gutter-y-30">
        <div className="col-xl-4 col-lg-6">
          <div className="contact-one__list">
            <div className="contact-one__item">
              <div className="contact-one__item__icon">
                <i className="icon-maps-and-flags" />
              </div>
              <div className="contact-one__item__content">
                <h5 className="contact-one__item__title">Mailing Address</h5>
                <p className="contact-one__item__text">
                  901 N Pitt Str., Suite 170 Alexandria, USA
                </p>
              </div>
            </div>
            <div className="contact-one__item">
              <div className="contact-one__item__icon">
                <i className="icon-telephone" />
              </div>
              <div className="contact-one__item__content">
                <h5 className="contact-one__item__title">Quick Contact</h5>
                <a
                  href="tel:91-0256-201-003"
                  className="contact-one__item__call"
                >
                  +91 0256 201 003
                </a>
                <a
                  href="tel:41-0003-5569-04"
                  className="contact-one__item__call"
                >
                  +41 0003 5569 04
                </a>
              </div>
            </div>
            <div className="contact-one__item">
              <div className="contact-one__item__icon">
                <i className="icon-message" />
              </div>
              <div className="contact-one__item__content">
                <h5 className="contact-one__item__title">support email</h5>
                <a href="#" className="contact-one__item__call">
                  contact@walloxsuport.com
                </a>
                <a href="#" className="contact-one__item__call">
                  info@wallox.com
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xl-8">
          <div className="contact-one__inner">
            <div
              className="contact-one__bg"
              style={{
                backgroundImage:
                  "url(/images/shapes/contact-shape-1-1.png)"
              }}
            />
            <div className="row">
              <div className="col-lg-6">
                <div className="contact-one__form__thumb real-image">
                  <img
                    src="/images/resources/contact-1-1.jpg"
                    alt="wallox image"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <form
                  className="contact-one__form contact-form-validated form-one background-base wow fadeInUp"
                  data-wow-duration="1500ms"
                  action="https://pixydrops.com/wallox-html/inc/sendemail.php"
                >
                  <div className="form-one__group">
                    <div className="form-one__control form-one__control--full">
                      <input type="text" name="name" placeholder="name" />
                    </div>
                    <div className="form-one__control form-one__control--full">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email address"
                      />
                    </div>
                    <div className="form-one__control form-one__control--full">
                      <input
                        type="text"
                        name="subject"
                        placeholder="select subject"
                      />
                    </div>
                    <div className="form-one__control form-one__control--full">
                      <textarea
                        name="message"
                        placeholder="Write  a message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form-one__control form-one__control--full">
                      <button
                        type="submit"
                        className="wallox-btn wallox-btn--base wallox-btn__submite"
                      >
                        get in touch <i className="icon-right-arrow" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="contact-map">
    <div className="google-map google-map__contact">
      <iframe
        title="template google map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
        className="map__contact"
        allowFullScreen=""
      />
    </div>
    {/* /.google-map */}
  </div>
</>

      
    </div>
  )
}
