import React from 'react'

export default function About() {
  return (
    <>
    <div className="page-wrapper">
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{
          backgroundImage: "url(/images/backgrounds/page-header-bg-1-1.jpg)"
        }}
      />
      <div className="container">
        <h2 className="page-header__title">About us</h2>
        <div className="wallox-breadcrumb">
          <ul className="wallox-breadcrumb__list list-unstyled">
            <li>
              <a href="index.html">
                <i className="icon-home" /> Home
              </a>
            </li>
            <li>
              <span>About</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <div className="about-one">
      <div className="container">
        <div className="row align-items-center gutter-y-30">
          <div className="col-lg-6">
            <div className="about-one__thumb">
              <div className="about-one__thumb__item real-image">
                <img src="/images/about/about-2-1.jpg" alt="wallox image" />
              </div>
              <div className="about-one__funfact count-box">
                <h3 className="about-one__count">
                  <span className="count-text" data-stop={25} data-speed={1500} />
                  <span>+</span>
                </h3>
                <p className="about-one__funfact__text">
                  years of <br /> experience
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="about-one__right">
              <div className="sec-title text-start">
                <div className="d-flex align-items-center justify-content-start">
                  <img
                    className="sec-title__image"
                    src="/images/shapes/sec-title-s-1.png"
                    alt="wallox image"
                  />
                  <h6 className="sec-title__tagline bw-split-in-right">
                    welcome to wallox
                  </h6>
                </div>
                <h3 className="sec-title__title bw-split-in-up">
                  We’re Providing Quality Wall Designs
                </h3>
              </div>
              <p className="about-one__top__text">
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable.
              </p>
              <div className="row align-items-center gutter-y-30">
                <div className="col-sm-6">
                  <div className="about-one__video">
                    <img
                      src="/images/about/video-bg.jpg"
                      alt="wallox image"
                    />
                    <div className="about-one__video-popup">
                      <a
                        href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                        className="about-one__video video-popup"
                      >
                        <i className="icon-polygon" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <ul className="about-one__list list-unstyled">
                    <li className="about-one__list__item">
                      {" "}
                      <i className="icon-check" /> We’re professional
                    </li>
                    <li className="about-one__list__item">
                      {" "}
                      <i className="icon-check" /> We use quality material
                    </li>
                    <li className="about-one__list__item">
                      {" "}
                      <i className="icon-check" /> 100% customers satisfaction
                    </li>
                  </ul>
                </div>
              </div>
              <div className="about-one__client">
                <div className="about-one__client__item">
                  <div className="about-one__client__thumb">
                    <img src="/images/resources/testi-1-1.jpg" alt="" />
                    <img src="/images/resources/testi-1-2.jpg" alt="" />
                    <img src="/images/resources/testi-1-3.jpg" alt="" />
                    <img src="/images/resources/testi-1-4.jpg" alt="" />
                  </div>
                  <div className="about-one__client__dec">
                    <div className="about-one__client__star">
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                    </div>
                    <p className="about-one__client__text">
                      Satisfied Client ratings
                    </p>
                  </div>
                </div>
                <a href="" className="wallox-btn wallox-btn--base">
                  more about us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-one__shape">
        <img src="/images/shapes/about-2-1.png" alt="" />
      </div>
    </div>
    <div className="why-choose">
      <div
        className="why-choose__bg"
        style={{ backgroundImage: "url(/images/shapes/why-chose-us.png)" }}
      />
      <div className="container">
        <div className="row gutter-y-30">
          <div className="col-lg-6">
            <div className="sec-title text-start">
              <div className="d-flex align-items-center justify-content-start">
                <img
                  className="sec-title__image"
                  src="/images/shapes/sec-title-s-1.png"
                  alt="wallox image"
                />
                <h6 className="sec-title__tagline bw-split-in-right">
                  why choose us?
                </h6>
              </div>
              <h3 className="sec-title__title bw-split-in-up">
                Leading Provider Of Interior Service In London
              </h3>
            </div>
            <p className="why-choose__top__text">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or
            </p>
            <div className="why-choose__box">
              <ul className="why-choose__box__list list-unstyled">
                <li>
                  <p className="why-choose__box__list__item">
                    <i className="icon-check" />
                    We’re professional
                  </p>
                </li>
                <li>
                  <p className="why-choose__box__list__item">
                    <i className="icon-check" />
                    We use quality material
                  </p>
                </li>
              </ul>
              <div className="why-choose__progress progress-box">
                <h4 className="progress-box__title">Interior Wall Design</h4>
                <div className="progress-box__bar">
                  <div
                    className="progress-box__bar__inner count-bar"
                    data-percent="80%"
                  >
                    <div className="progress-box__number count-text">80%</div>
                  </div>
                </div>
              </div>
              {/* /.skills-item */}
            </div>
          </div>
          <div className="col-lg-6">
            <div className="why-choose__right">
              <div className="why-choose__thumb real-image">
                <img
                  src="/images/service/service-man-bg.jpg"
                  alt=" wallox image"
                />
              </div>
              <div className="why-choose__thumb--two">
                <img
                  src="/images/service/service-man.png"
                  alt=" wallox image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="why-choose__shape">
        <img src="/images/shapes/angle-1-1.png" alt="" />
      </div>
      <div className="why-choose__shape why-choose__shape--two">
        <img src="/images/shapes/angle-1-2.png" alt="" />
      </div>
    </div>
    <section className="testimonials-two">
      <div className="container">
        <div className="sec-title text-center">
          <div className="d-flex align-items-center justify-content-center">
            <img
              className="sec-title__image"
              src="/images/shapes/sec-title-s-1.png"
              alt="wallox image"
            />
            <h6 className="sec-title__tagline bw-split-in-right">
              our testimonials
            </h6>
          </div>
          <h3 className="sec-title__title bw-split-in-up">
            What They Talked <br /> About Wallox
          </h3>
        </div>
        <div className="container">
          <div
            className="testimonials-two__carousel wallox-owl__carousel owl-carousel owl-theme"
            data-owl-options='{
            "items": 1,
            "margin": 0,
            "loop": true,
            "smartSpeed": 700,
            "nav": false,
            "dots": false,
            "autoplay": true,
            "responsive": {
                "0": {
                    "items": 1
                },
                "576": {
                    "items": 1,
                    "margin": 30
                },
                "992": {
                    "items": 2,
                    "margin": 30
                },
                "1199": {
                    "items": 2,
                    "margin": 30
                }
            }
        }'
          >
            <div className="item">
              <div
                className="testimonials-card wow fadeInUp"
                data-wow-duration="000ms"
                data-wow-delay="000ms"
              >
                <div className="testimonials-card__top">
                  <div className="testimonials-card__image">
                    <img
                      src="/images/resources/testi-2-2.jpg"
                      alt="Kathryn Murphy"
                    />
                  </div>
                  <div className="testimonials-card__top__video">
                    <a
                      href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                      className="testimonials-card__video video-popup"
                    >
                      <i className="icon-polygon" />
                    </a>
                  </div>
                </div>
                <p className="testimonials-card__text">
                  “Consectetur adipiscing elit. Integer nunc viverra laoreet est
                  the is porta pretium metus aliquam eget maecenas porta is nunc
                  viverra Aenean pulvinar maximus leo ”
                </p>
                <div className="testimonials-card__content">
                  <div className="testimonials-card__author">
                    <h4 className="testimonials-card__author__title">
                      Kathryn Murphy
                    </h4>
                    <span className="testimonials-card__author__dec">
                      Web Developer
                    </span>
                  </div>
                  <div className="testimonials-card__rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
                <div className="testimonials-card__quite">
                  <i className="icon-quite1" />
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="testimonials-card wow fadeInUp"
                data-wow-duration="000ms"
                data-wow-delay="000ms"
              >
                <div className="testimonials-card__top">
                  <div className="testimonials-card__image">
                    <img
                      src="/images/resources/testi-2-1.jpg"
                      alt="Kathryn Murphy"
                    />
                  </div>
                  <div className="testimonials-card__top__video">
                    <a
                      href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                      className="testimonials-card__video video-popup"
                    >
                      <i className="icon-polygon" />
                    </a>
                  </div>
                </div>
                <p className="testimonials-card__text">
                  “Consectetur adipiscing elit. Integer nunc viverra laoreet est
                  the is porta pretium metus aliquam eget maecenas porta is nunc
                  viverra Aenean pulvinar maximus leo ”
                </p>
                <div className="testimonials-card__content">
                  <div className="testimonials-card__author">
                    <h4 className="testimonials-card__author__title">
                      Kathryn Murphy
                    </h4>
                    <span className="testimonials-card__author__dec">
                      Web Developer
                    </span>
                  </div>
                  <div className="testimonials-card__rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
                <div className="testimonials-card__quite">
                  <i className="icon-quite1" />
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="testimonials-card wow fadeInUp"
                data-wow-duration="000ms"
                data-wow-delay="000ms"
              >
                <div className="testimonials-card__top">
                  <div className="testimonials-card__image">
                    <img
                      src="/images/resources/testi-2-2.jpg"
                      alt="Kathryn Murphy"
                    />
                  </div>
                  <div className="testimonials-card__top__video">
                    <a
                      href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                      className="testimonials-card__video video-popup"
                    >
                      <i className="icon-polygon" />
                    </a>
                  </div>
                </div>
                <p className="testimonials-card__text">
                  “Consectetur adipiscing elit. Integer nunc viverra laoreet est
                  the is porta pretium metus aliquam eget maecenas porta is nunc
                  viverra Aenean pulvinar maximus leo ”
                </p>
                <div className="testimonials-card__content">
                  <div className="testimonials-card__author">
                    <h4 className="testimonials-card__author__title">
                      Kathryn Murphy
                    </h4>
                    <span className="testimonials-card__author__dec">
                      Web Developer
                    </span>
                  </div>
                  <div className="testimonials-card__rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
                <div className="testimonials-card__quite">
                  <i className="icon-quite1" />
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="testimonials-card wow fadeInUp"
                data-wow-duration="000ms"
                data-wow-delay="000ms"
              >
                <div className="testimonials-card__top">
                  <div className="testimonials-card__image">
                    <img
                      src="/images/resources/testi-2-1.jpg"
                      alt="Kathryn Murphy"
                    />
                  </div>
                  <div className="testimonials-card__top__video">
                    <a
                      href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                      className="testimonials-card__video video-popup"
                    >
                      <i className="icon-polygon" />
                    </a>
                  </div>
                </div>
                <p className="testimonials-card__text">
                  “Consectetur adipiscing elit. Integer nunc viverra laoreet est
                  the is porta pretium metus aliquam eget maecenas porta is nunc
                  viverra Aenean pulvinar maximus leo ”
                </p>
                <div className="testimonials-card__content">
                  <div className="testimonials-card__author">
                    <h4 className="testimonials-card__author__title">
                      Kathryn Murphy
                    </h4>
                    <span className="testimonials-card__author__dec">
                      Web Developer
                    </span>
                  </div>
                  <div className="testimonials-card__rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
                <div className="testimonials-card__quite">
                  <i className="icon-quite1" />
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="testimonials-card wow fadeInUp"
                data-wow-duration="000ms"
                data-wow-delay="000ms"
              >
                <div className="testimonials-card__top">
                  <div className="testimonials-card__image">
                    <img
                      src="/images/resources/testi-2-2.jpg"
                      alt="Kathryn Murphy"
                    />
                  </div>
                  <div className="testimonials-card__top__video">
                    <a
                      href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                      className="testimonials-card__video video-popup"
                    >
                      <i className="icon-polygon" />
                    </a>
                  </div>
                </div>
                <p className="testimonials-card__text">
                  “Consectetur adipiscing elit. Integer nunc viverra laoreet est
                  the is porta pretium metus aliquam eget maecenas porta is nunc
                  viverra Aenean pulvinar maximus leo ”
                </p>
                <div className="testimonials-card__content">
                  <div className="testimonials-card__author">
                    <h4 className="testimonials-card__author__title">
                      Kathryn Murphy
                    </h4>
                    <span className="testimonials-card__author__dec">
                      Web Developer
                    </span>
                  </div>
                  <div className="testimonials-card__rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
                <div className="testimonials-card__quite">
                  <i className="icon-quite1" />
                </div>
              </div>
            </div>
            <div className="item">
              <div
                className="testimonials-card wow fadeInUp"
                data-wow-duration="000ms"
                data-wow-delay="000ms"
              >
                <div className="testimonials-card__top">
                  <div className="testimonials-card__image">
                    <img
                      src="/images/resources/testi-2-1.jpg"
                      alt="Kathryn Murphy"
                    />
                  </div>
                  <div className="testimonials-card__top__video">
                    <a
                      href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                      className="testimonials-card__video video-popup"
                    >
                      <i className="icon-polygon" />
                    </a>
                  </div>
                </div>
                <p className="testimonials-card__text">
                  “Consectetur adipiscing elit. Integer nunc viverra laoreet est
                  the is porta pretium metus aliquam eget maecenas porta is nunc
                  viverra Aenean pulvinar maximus leo ”
                </p>
                <div className="testimonials-card__content">
                  <div className="testimonials-card__author">
                    <h4 className="testimonials-card__author__title">
                      Kathryn Murphy
                    </h4>
                    <span className="testimonials-card__author__dec">
                      Web Developer
                    </span>
                  </div>
                  <div className="testimonials-card__rating">
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                    <i className="fa fa-star" />
                  </div>
                </div>
                <div className="testimonials-card__quite">
                  <i className="icon-quite1" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="team-one team-one--home">
      <div
        className="team-one__bg"
        style={{ backgroundImage: "url(/images/backgrounds/team-bg.png)" }}
      />
      <div className="container">
        <div className="team-one__top">
          <div className="row align-items-center justify-content-between gutter-y-30">
            <div className="col-lg-8">
              <div className="sec-title">
                <div className="d-flex align-items-center justify-content-start">
                  <img
                    className="sec-title__image"
                    src="/images/shapes/sec-title-s-3.png"
                    alt="wallox image"
                  />
                  <h6 className="sec-title__tagline bw-split-in-right">
                    our team
                  </h6>
                </div>
                <h3 className="sec-title__title bw-split-in-up">
                  Meet the Expert Team
                </h3>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="team-one__top__btn">
                <a href="" className="wallox-btn wallox-btn--border">
                  view all team
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row gutter-y-30">
          <div className="col-md-6 col-lg-4">
            <div
              className="team-card wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="team-card__thumb">
                <img src="/images/team/team-1-1.jpg" alt="wallox image" />
              </div>
              <div className="team-card__content">
                <h4 className="team-card__content__title">
                  <a href="">Leslie Alexander</a>
                </h4>
                <span className="team-card__content__dec">Web Developer</span>
              </div>
              <div className="team-card__social">
                <a href="https://facebook.com/">
                  <i className="icon-facebook1" aria-hidden="true" />
                </a>
                <a href="https://instagram.com/">
                  <i className="icon-social-media" aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin-in" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div
              className="team-card wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="team-card__thumb">
                <img src="/images/team/team-1-2.jpg" alt="wallox image" />
              </div>
              <div className="team-card__content">
                <h4 className="team-card__content__title">
                  <a href="">Michael T. Lee</a>
                </h4>
                <span className="team-card__content__dec">Web Developer</span>
              </div>
              <div className="team-card__social">
                <a href="https://facebook.com/">
                  <i className="icon-facebook1" aria-hidden="true" />
                </a>
                <a href="https://instagram.com/">
                  <i className="icon-social-media" aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin-in" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4">
            <div
              className="team-card wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="team-card__thumb">
                <img src="/images/team/team-1-3.jpg" alt="wallox image" />
              </div>
              <div className="team-card__content">
                <h4 className="team-card__content__title">
                  <a href="">Leslie Alexander</a>
                </h4>
                <span className="team-card__content__dec">Web Developer</span>
              </div>
              <div className="team-card__social">
                <a href="https://facebook.com/">
                  <i className="icon-facebook1" aria-hidden="true" />
                </a>
                <a href="https://instagram.com/">
                  <i className="icon-social-media" aria-hidden="true" />
                </a>
                <a href="https://www.linkedin.com/">
                  <i className="fab fa-linkedin-in" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="faqs-two">
      <div className="container">
        <div className="row align-items-center gutter-y-30">
          <div className="col-lg-6">
            <div
              className="faq-page__accordion faq-page__accordion--faqs-two wallox-accrodion wow fadeInRight"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
              data-grp-name="wallox-accrodion"
            >
              <div className="accrodion active">
                <div className="accrodion-title">
                  <h4 className="accrodion-title__text">
                    <span className="accrodion-title__icon" />
                    What types of wallpaper do you offer?
                  </h4>
                </div>
                <div className="accrodion-content">
                  <div className="inner">
                    <p className="inner__text">
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day, going forward,
                      a new normal that has evolved from generation X is on the
                    </p>
                  </div>
                </div>
              </div>
              <div className="accrodion">
                <div className="accrodion-title">
                  <h4 className="accrodion-title__text">
                    {" "}
                    <span className="accrodion-title__icon" />
                    How do I measure the amount of wallpaper I need?
                  </h4>
                </div>
                <div className="accrodion-content">
                  <div className="inner">
                    <p className="inner__text">
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day, going forward,
                      a new normal that has evolved from generation X is on the
                    </p>
                  </div>
                </div>
              </div>
              <div className="accrodion">
                <div className="accrodion-title">
                  <h4 className="accrodion-title__text">
                    <span className="accrodion-title__icon" />
                    How do I install wallpaper?
                  </h4>
                </div>
                <div className="accrodion-content">
                  <div className="inner">
                    <p className="inner__text">
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day, going forward,
                      a new normal that has evolved from generation X is on the
                    </p>
                  </div>
                </div>
              </div>
              <div className="accrodion">
                <div className="accrodion-title">
                  <h4 className="accrodion-title__text">
                    <span className="accrodion-title__icon" />
                    Can I remove the wallpaper easily?
                  </h4>
                </div>
                <div className="accrodion-content">
                  <div className="inner">
                    <p className="inner__text">
                      Bring to the table win-win survival strategies to ensure
                      proactive domination. At the end of the day, going forward,
                      a new normal that has evolved from generation X is on the
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="sec-title text-start">
              <div className="d-flex align-items-center justify-content-start">
                <img
                  className="sec-title__image"
                  src="/images/shapes/sec-title-s-1.png"
                  alt="wallox image"
                />
                <h6 className="sec-title__tagline bw-split-in-right">
                  freequently asked question
                </h6>
              </div>
              <h3 className="sec-title__title bw-split-in-up">
                Ultimately, quality work is judged by the extent
              </h3>
            </div>
            <p className="faqs-two__top__text">
              There are many variations of passages of Lorem Ipsum available, but
              the majority have suffered alteration in some form, by injected
              humour, or randomised words which don't look even slightly
              believable.
            </p>
            <div className="row align-items-center gutter-y-30">
              <div className="col-md-6">
                <ul className="faqs-two__list list-unstyled">
                  <li className="faqs-two__list__item">
                    {" "}
                    <i className="icon-check" /> We’re professional
                  </li>
                  <li className="faqs-two__list__item">
                    {" "}
                    <i className="icon-check" /> We use quality material
                  </li>
                  <li className="faqs-two__list__item">
                    {" "}
                    <i className="icon-check" /> 100% customers satisfaction
                  </li>
                </ul>
              </div>
              <div className="col-md-6">
                <div className="faqs-two__thumb">
                  <img
                    src="/images/resources/faqs-s-bg.jpg"
                    alt="wallox image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  </>
  
  )
}
