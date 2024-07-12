import React from 'react'

export default function Home() {
  return (
    <>
  <section className="hero-three">
    <div
      className="hero-three__carousel wallox-slick__carousel slick"
      data-slick-options='{
		"slidesToShow": 1,
		"slidesToScroll": 1,
		"fade": true,
		"asNavFor": ".hero-three__counter__carousel",
		"autoplay": true,
		"autoplaySpeed": 4000,
		"speed": 2000,
		"infinite": true,
		"dots": true
		}'
    >
      <div className="item">
        <div className="hero-three__item">
          <div
            className="hero-three__bg"
            style={{
              backgroundImage: "url(/images/backgrounds/slider-1-1.jpg)"
            }}
          />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="hero-three__content text-center">
                  <h5 className="hero-three__sub-title">
                    Transform your space, one wall at a time
                  </h5>
                  <h2 className="hero-three__title">
                    the best quality wallpapers for your home
                  </h2>
                  <div className="hero-three__btn">
                    <a
                      href="services.html"
                      className="wallox-btn wallox-btn--base"
                    >
                      our services
                    </a>
                    <a
                      href="services.html"
                      className="wallox-btn wallox-btn--border"
                    >
                      discover more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="hero-three__item">
          <div
            className="hero-three__bg"
            style={{
              backgroundImage: "url(/images/backgrounds/slider-1-2.jpg)"
            }}
          />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="hero-three__content text-center">
                  <h5 className="hero-three__sub-title">
                    Transform your space, one wall at a time
                  </h5>
                  <h2 className="hero-three__title">
                    the best quality wallpapers for your home
                  </h2>
                  <div className="hero-three__btn">
                    <a
                      href="services.html"
                      className="wallox-btn wallox-btn--base"
                    >
                      our services
                    </a>
                    <a
                      href="services.html"
                      className="wallox-btn wallox-btn--border"
                    >
                      discover more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="hero-three__item">
          <div
            className="hero-three__bg"
            style={{
              backgroundImage: "url(/images/backgrounds/slider-1-3.jpg)"
            }}
          />
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="hero-three__content text-center">
                  <h5 className="hero-three__sub-title">
                    Transform your space, one wall at a time
                  </h5>
                  <h2 className="hero-three__title">
                    the best quality wallpapers for your home
                  </h2>
                  <div className="hero-three__btn">
                    <a
                      href="services.html"
                      className="wallox-btn wallox-btn--base"
                    >
                      our services
                    </a>
                    <a
                      href="services.html"
                      className="wallox-btn wallox-btn--border"
                    >
                      discover more
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      className="hero-three__counter__carousel wallox-slick__carousel slick"
      data-slick-options='{
			"slidesToShow": 3,
			"autoplay": true,
			"autoplaySpeed": 4000,
			"asNavFor": ".hero-three__carousel",
			"speed": 2000,
			"infinite": true,
			"dots": false
		}'
    >
      <div className="hero-three__counter__item">
        <span>01</span>
      </div>
      <div className="hero-three__counter__item">
        <span>02</span>
      </div>
      <div className="hero-three__counter__item">
        <span>03</span>
      </div>
    </div>
  </section>
  <section className="feature-one">
    <div className="container">
      <div className="row gutter-y-30">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div
            className="feature-one__item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="100ms"
          >
            <div className="feature-one__item__inner">
              <div className="feature-one__item__icon">
                <i className="icon-idea" />
              </div>
            </div>
            <h5 className="feature-one__item__title">
              <a href="">smart work</a>
            </h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div
            className="feature-one__item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="300ms"
          >
            <div className="feature-one__item__inner">
              <div className="feature-one__item__icon">
                <i className="icon-interior-design" />
              </div>
            </div>
            <h5 className="feature-one__item__title">
              <a href="">unique design</a>
            </h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div
            className="feature-one__item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="500ms"
          >
            <div className="feature-one__item__inner">
              <div className="feature-one__item__icon">
                <i className="icon-team-leader" />
              </div>
            </div>
            <h5 className="feature-one__item__title">
              <a href="">skilled team</a>
            </h5>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <div
            className="feature-one__item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="700ms"
          >
            <div className="feature-one__item__inner">
              <div className="feature-one__item__icon">
                <i className="icon-best-price" />
              </div>
            </div>
            <h5 className="feature-one__item__title">
              <a href="">best pricing</a>
            </h5>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="about-two">
    <div
      className="about-two__bg"
      style={{ backgroundImage: "url(/images/shapes/about-bg-2-1.png)" }}
    />
    <div className="container">
      <div className="row gutter-y-30">
        <div className="col-lg-6">
          <div className="about-two__left">
            <div className="about-two__video-popup">
              <a
                href="https://www.youtube.com/watch?v=h9MbznbxlLc"
                className="about-two__video video-popup"
              >
                <i className="icon-polygon" />
              </a>
            </div>
            <div
              className="about-two__thumb wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="about-two__thumb__item">
                <img
                  src="/images/about/about-2-1.jpg"
                  alt="wallox imaage"
                />
              </div>
              <div className="about-two__thumb__item-two">
                <img
                  src="/images/about/about-s-2-1.jpg"
                  alt="wallox imaage"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="about-two__right">
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
                We Focus to Make Your Walls Beautiful
              </h3>
            </div>
            <p
              className="about-two__top__text wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              Aonsectetur adipiscing elit Aenean scelerisque augue vitae
              consequat Juisque eget congue velit in cursus leo sodales the
              turpis euismod quis sapien euismod quis sapien the.
            </p>
            <div
              className="about-two__feature wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="about-two__feature__item">
                <h4 className="about-two__feature__title">
                  Beautiful Clean Result
                </h4>
                <p className="about-two__feature__text">
                  Duis nunc risus, suscipit efficitur enim non, egestas interdum
                </p>
              </div>
              <div className="about-two__feature__item">
                <h4 className="about-two__feature__title">
                  Awesome Work Deliver
                </h4>
                <p className="about-two__feature__text">
                  Duis nunc risus, suscipit efficitur enim non, egestas interdum
                </p>
              </div>
            </div>
            <div
              className="about-two__connect wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <a href="about.html" className="wallox-btn">
                more about us
              </a>
              <div className="about-two__call">
                <div className="about-two__call__icon">
                  <i className="icon-telephone" />
                </div>
                <div className="about-two__call__content">
                  <span className="about-two__call__subtitle">Call Us Now</span>
                  <a
                    href="tel:+208-555-0112"
                    className="about-two__call__number"
                  >
                    +208-555-0112
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="about-two__shape">
      <img src="/images/shapes/about-2-1-shape.png" alt="" />
    </div>
  </section>
  <section className="service-three">
    <div
      className="service-three__bg"
      style={{
        backgroundImage: "url(/images/backgrounds/service-bg-3-1.png)"
      }}
    />
    <div className="service-three__text-slider">
      <div className="service-three__text-slider__inner">
        <div className="service-three__text-slider__item">
          <img src="/images/shapes/portal.png" alt="" />
          wallpapers
        </div>
        <div className="service-three__text-slider__item">
          <img src="/images/shapes/portal.png" alt="" />
          painting
        </div>
        <div className="service-three__text-slider__item">
          <img src="/images/shapes/portal.png" alt="" />
          Brown
        </div>
        <div className="service-three__text-slider__item">
          <img src="/images/shapes/portal.png" alt="" />
          Stickers
        </div>
        <div className="service-three__text-slider__item">
          <img src="/images/shapes/portal.png" alt="" />
          Graham
        </div>
        <div className="service-three__text-slider__item">
          <img src="/images/shapes/portal.png" alt="" />
          wallpapers
        </div>
        <div className="service-three__text-slider__item">
          <img src="/images/shapes/portal.png" alt="" />
          painting
        </div>
        <div className="service-three__text-slider__item">
          <img src="/images/shapes/portal.png" alt="" />
          Brown
        </div>
        <div className="service-three__text-slider__item">
          <img src="/images/shapes/portal.png" alt="" />
          Stickers
        </div>
        <div className="service-three__text-slider__item">
          <img src="/images/shapes/portal.png" alt="" />
          Graham
        </div>
      </div>
    </div>
    <div className="container">
      <div className="service-three__top">
        <div className="row align-items-end">
          <div className="col-lg-8">
            <div className="sec-title">
              <div className="d-flex align-items-center justify-content-start">
                <img
                  className="sec-title__image"
                  src="/images/shapes/sec-title-s-3.png"
                  alt="wallox image"
                />
                <h6 className="sec-title__tagline bw-split-in-right">
                  our best services
                </h6>
              </div>
              <h3 className="sec-title__title bw-split-in-up">
                Services We’re Offering
              </h3>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="service-three__top__btn">
              <a href="services.html" className="wallox-btn wallox-btn--border">
                view all Service
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row gutter-y-30">
        <div className="col-lg-6">
          <div
            className="service-three__item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="100ms"
          >
            <div className="service-three__thumb">
              <img
                src="/images/service/service-3-1.jpg"
                alt="wallox image"
              />
            </div>
            <div className="service-three__content">
              <div className="service-three__content__left">
                <span className="service-three__content__number" />
                <h4 className="service-three__content__title">
                  <a href="">Room Wallpapers</a>
                </h4>
              </div>
              <div className="service-three__content__right">
                <a href="" className="wallox-btn wallox-btn--border">
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="service-three__item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="300ms"
          >
            <div className="service-three__thumb">
              <img
                src="/images/service/service-3-2.jpg"
                alt="wallox image"
              />
            </div>
            <div className="service-three__content">
              <div className="service-three__content__left">
                <span className="service-three__content__number" />
                <h4 className="service-three__content__title">
                  <a href="">Wall Painting</a>
                </h4>
              </div>
              <div className="service-three__content__right">
                <a href="" className="wallox-btn wallox-btn--border">
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="service-three__item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="500ms"
          >
            <div className="service-three__thumb">
              <img
                src="/images/service/service-3-3.jpg"
                alt="wallox image"
              />
            </div>
            <div className="service-three__content">
              <div className="service-three__content__left">
                <span className="service-three__content__number" />
                <h4 className="service-three__content__title">
                  <a href="">interior designing</a>
                </h4>
              </div>
              <div className="service-three__content__right">
                <a href="" className="wallox-btn wallox-btn--border">
                  Details
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="service-three__item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="700ms"
          >
            <div className="service-three__thumb">
              <img
                src="/images/service/service-3-4.jpg"
                alt="wallox image"
              />
            </div>
            <div className="service-three__content">
              <div className="service-three__content__left">
                <span className="service-three__content__number" />
                <h4 className="service-three__content__title">
                  <a href="">wall sheets</a>
                </h4>
              </div>
              <div className="service-three__content__right">
                <a href="" className="wallox-btn wallox-btn--border">
                  Details
                </a>
              </div>
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
            className="faq-page__accordion faq-page__accordion--faqs-two wallox-accrodion wow fadeInLeft"
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
          <p
            className="faqs-two__top__text wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="300ms"
          >
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
          <div className="row align-items-center gutter-y-30">
            <div className="col-md-6">
              <ul
                className="faqs-two__list list-unstyled wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="100ms"
              >
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
              <div
                className="faqs-two__thumb wow fadeInUp"
                data-wow-duration="1500ms"
                data-wow-delay="300ms"
              >
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
  <section className="project-three">
    <div
      className="project-three__bg"
      style={{
        backgroundImage: "url(/images/shapes/contact-shape-1-1.png)"
      }}
    />
    <div className="container">
      <div className="row gutter-y-30">
        <div className="col-lg-6">
          <div className="project-three__left">
            <div className="sec-title text-start">
              <div className="d-flex align-items-center justify-content-start">
                <img
                  className="sec-title__image"
                  src="/images/shapes/sec-title-s-1.png"
                  alt="wallox image"
                />
                <h6 className="sec-title__tagline bw-split-in-right">
                  our complete projects
                </h6>
              </div>
              <h3 className="sec-title__title bw-split-in-up">
                Recent Complete Projects
              </h3>
            </div>
            <p
              className="project-three__top__text wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable.
            </p>
            <div
              className="project-three__carousel__inner wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="project-three__carousel__inner__item">
                <div
                  className="project-three__carousel wallox-slick__custome-counter"
                  data-slick-options='{
								"slidesToShow": 1,
								"slidesToScroll": 1,
								"autoplay": true,
								"centerMode": true,
								"asNavFor": ".project-three__thumb__carousel",
								"focusOnSelect": true,
								"dots": false,
								"centerPadding": 0,
								"arrows": false,
								"nextArrow": "<button class=\"next\"><i class=\"icon-angle-right\"></i></button>",
								"prevArrow": "<button class=\"prev\"><i class=\"icon-angle-left\"></i></button>"
								}'
                >
                  <div className="item">
                    <div className="project-three__item">
                      <span className="project-three__item__subtitle">
                        interior
                      </span>
                      <h5 className="project-three__item__title">
                        Ceiling Wallpaper
                      </h5>
                      <p className="project-three__item__text">
                        Duis nunc risus, suscipit efficitur enim non, egestas
                        interdum
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="project-three__item">
                      <span className="project-three__item__subtitle">
                        interior
                      </span>
                      <h5 className="project-three__item__title">
                        Ceiling Wallpaper
                      </h5>
                      <p className="project-three__item__text">
                        Duis nunc risus, suscipit efficitur enim non, egestas
                        interdum
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="project-three__item">
                      <span className="project-three__item__subtitle">
                        interior
                      </span>
                      <h5 className="project-three__item__title">
                        Ceiling Wallpaper
                      </h5>
                      <p className="project-three__item__text">
                        Duis nunc risus, suscipit efficitur enim non, egestas
                        interdum
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="project-three__item">
                      <span className="project-three__item__subtitle">
                        interior
                      </span>
                      <h5 className="project-three__item__title">
                        Ceiling Wallpaper
                      </h5>
                      <p className="project-three__item__text">
                        Duis nunc risus, suscipit efficitur enim non, egestas
                        interdum
                      </p>
                    </div>
                  </div>
                  <div className="item">
                    <div className="project-three__item">
                      <span className="project-three__item__subtitle">
                        interior
                      </span>
                      <h5 className="project-three__item__title">
                        Ceiling Wallpaper
                      </h5>
                      <p className="project-three__item__text">
                        Duis nunc risus, suscipit efficitur enim non, egestas
                        interdum
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="project-three__right">
            <div className="project-three__thumb">
              <div
                className="project-three__thumb__carousel wallox-slick__custome-counter"
                data-slick-options='{
							"slidesToShow": 1,
							"slidesToScroll": 1,
							"autoplay": true,
							"centerMode": true,
							"asNavFor": ".project-three__carousel",
							"focusOnSelect": true,
							"dots": false,
							"centerPadding": 0,
							"arrows": false
							}'
              >
                <div className="item">
                  <div className="project-three__thumb__item">
                    <img
                      src="/images/resources/process-1-1.jpg"
                      alt="wallox image"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="project-three__thumb__item">
                    <img
                      src="/images/resources/process-1-1.jpg"
                      alt="wallox image"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="project-three__thumb__item">
                    <img
                      src="/images/resources/process-1-1.jpg"
                      alt="wallox image"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="project-three__thumb__item">
                    <img
                      src="/images/resources/process-1-1.jpg"
                      alt="wallox image"
                    />
                  </div>
                </div>
                <div className="item">
                  <div className="project-three__thumb__item">
                    <img
                      src="/images/resources/process-1-1.jpg"
                      alt="wallox image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="project-three__element">
      <img src="/images/shapes/angle-1-3.png" alt="" />
    </div>
    <div className="project-three__element-two">
      <img src="/images/shapes/angle-1-2.png" alt="" />
    </div>
  </section>
  <section className="testimonials-three">
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
          What They Talked About Wallox
        </h3>
      </div>
      <div
        className="testimonials-three__inner wow fadeInUp"
        data-wow-duration="1500ms"
        data-wow-delay="500ms"
      >
        <div
          className="testimonials-three__inner__bg"
          style={{
            backgroundImage: "url(/images/backgrounds/testi-bg.jpg)"
          }}
        />
        <div className="row align-items-center gutter-y-30">
          <div className="col-xl-7">
            <div className="testimonials-three__carousel__left">
              <div
                className="testimonials-three__carousel wallox-slick__carousel wallox-slick__carousel--custom-nav slick"
                data-slick-options='{
								"slidesToShow": 1,
								"slidesToScroll": 1,
								"autoplay": true,
								"autoplaySpeed": 4000,
								"speed": 2000,
								"asNavFor": ".testimonials-three__thumb__carousel",
								"infinite": true,
								"arrows": false,
								"dots": false
							}'
              >
                <div className="testimonials-three__item">
                  <div className="testimonials-three__item__quite">
                    <img src="/images/shapes/quite-1-1.png" alt="" />
                  </div>
                  <p className="testimonials-three__item__text">
                    ienet internet Company also impressed us with their
                    transparency regarding costs. The initial quote was accurate
                  </p>
                  <div className="testimonials-three__item__author">
                    <h4 className="testimonials-three__item__name">
                      Anthony B. Castillo
                    </h4>
                    <span className="testimonials-three__item__dec">
                      managing director
                    </span>
                    <div className="testimonials-three__item__star">
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                    </div>
                  </div>
                </div>
                <div className="testimonials-three__item">
                  <div className="testimonials-three__item__quite">
                    <img src="/images/shapes/quite-1-1.png" alt="" />
                  </div>
                  <p className="testimonials-three__item__text">
                    ienet internet Company also impressed us with their
                    transparency regarding costs. The initial quote was accurate
                  </p>
                  <div className="testimonials-three__item__author">
                    <h4 className="testimonials-three__item__name">
                      Anthony B. dd
                    </h4>
                    <span className="testimonials-three__item__dec">
                      managing director
                    </span>
                    <div className="testimonials-three__item__star">
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                    </div>
                  </div>
                </div>
                <div className="testimonials-three__item">
                  <div className="testimonials-three__item__quite">
                    <img src="/images/shapes/quite-1-1.png" alt="" />
                  </div>
                  <p className="testimonials-three__item__text">
                    ienet internet Company also impressed us with their
                    transparency regarding costs. The initial quote was accurate
                  </p>
                  <div className="testimonials-three__item__author">
                    <h4 className="testimonials-three__item__name">
                      Anthony B. Castillo
                    </h4>
                    <span className="testimonials-three__item__dec">
                      managing director
                    </span>
                    <div className="testimonials-three__item__star">
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-5">
            <div className="testimonials-three__carousel__right">
              <div
                className="testimonials-three__thumb__carousel wallox-slick__carousel--with-counter wallox-slick__carousel slick"
                data-slick-options='{
							"slidesToShow": 1,
							"slidesToScroll": 1,
							"fade": true,
							"autoplay": true,
							"autoplaySpeed": 4000,
							"speed": 2000,
							"asNavFor": ".testimonials-three__carousel",
							"infinite": true,
							"prevArrow": "<button class=\"slick-button slick-button--prev\"><span class=\"icon-angle-right\"></span></button>",
							"nextArrow": "<button class=\"slick-button slick-button--next\"><span class=\"icon-angle-left\"></span></button>",
							"arrows": true,
							"dots": false
						}'
              >
                <div className="testimonials-three__thumb__item">
                  <img
                    src="/images/resources/testi-3-1.jpg"
                    alt="wallox image"
                  />
                </div>
                <div className="testimonials-three__thumb__item">
                  <img
                    src="/images/resources/testi-3-2.jpg"
                    alt="wallox image"
                  />
                </div>
                <div className="testimonials-three__thumb__item">
                  <img
                    src="/images/resources/testi-3-3.jpg"
                    alt="wallox image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials-three__left">
          <img src="/images/shapes/fita-1-1.png" alt="" />
        </div>
        <div className="testimonials-three__right">
          <img src="/images/shapes/fita-1-2.png" alt="" />
        </div>
      </div>
    </div>
    <div className="testimonials-three__element">
      <img src="/images/shapes/hero-1-2.png" alt="" />
    </div>
    <div className="testimonials-three__element-two">
      <img src="/images/shapes/asterisk-2.png" alt="" />
    </div>
  </section>
  <div className="instagram-one instagram-one--three">
    <div className="container-fluid">
      <div className="instagram-one__inner">
        <div className="row gutter-y-30">
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div
              className="instagram-one__item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <img
                src="/images/instagram/instagram-1-1.jpg"
                alt="wallox image"
              />
              <div className="instagram-one__item__icon">
                <a href="https://www.instagram.com/">
                  <span className="icon-social-media" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div
              className="instagram-one__item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <img
                src="/images/instagram/instagram-1-2.jpg"
                alt="wallox image"
              />
              <div className="instagram-one__item__icon">
                <a href="https://www.instagram.com/">
                  <span className="icon-social-media" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div
              className="instagram-one__item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="500ms"
            >
              <img
                src="/images/instagram/instagram-1-3.jpg"
                alt="wallox image"
              />
              <div className="instagram-one__item__icon">
                <a href="https://www.instagram.com/">
                  <span className="icon-social-media" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div
              className="instagram-one__item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="700ms"
            >
              <img
                src="/images/instagram/instagram-1-4.jpg"
                alt="wallox image"
              />
              <div className="instagram-one__item__icon">
                <a href="https://www.instagram.com/">
                  <span className="icon-social-media" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div
              className="instagram-one__item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="900ms"
            >
              <img
                src="/images/instagram/instagram-1-5.jpg"
                alt="wallox image"
              />
              <div className="instagram-one__item__icon">
                <a href="https://www.instagram.com/">
                  <span className="icon-social-media" />
                </a>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
            <div
              className="instagram-one__item wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="1100ms"
            >
              <img
                src="/images/instagram/instagram-1-6.jpg"
                alt="wallox image"
              />
              <div className="instagram-one__item__icon">
                <a href="https://www.instagram.com/">
                  <span className="icon-social-media" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <section className="team-one team-one--three">
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
            <div
              className="team-one__top__btn wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
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
  <section className="blog-three blog-three--three">
    <div
      className="blog-three__bg"
      style={{ backgroundImage: "url(/images/shapes/blog-bg-shape.png)" }}
    />
    <div className="container">
      <div className="sec-title text-center">
        <div className="d-flex align-items-center justify-content-center">
          <img
            className="sec-title__image"
            src="/images/shapes/sec-title-s-1.png"
            alt="wallox image"
          />
          <h6 className="sec-title__tagline bw-split-in-right">latest blog</h6>
        </div>
        <h3 className="sec-title__title bw-split-in-up">
          Our Latest Blog &amp; News
        </h3>
      </div>
      <div className="row gutter-y-30">
        <div className="col-lg-6">
          <div className="blog-three__left">
            <div
              className="blog-three__left__bg"
              style={{
                backgroundImage: "url(/images/shapes/blog-card-bg.png)"
              }}
            />
            <div
              className="blog-three__inner wow fadeInLeft"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div className="blog-three__card__item">
                <div className="blog-card__date">
                  <span className="blog-card__date__day">20</span>{" "}
                  <span className="blog-card__date__month">June</span>
                </div>
                <h3 className="blog-card__title">
                  <a href="">
                    cupidatat nonproident, sunt in culpa qui officia deserunt
                  </a>
                </h3>
                <ul className="blog-card__meta list-unstyled">
                  <li className="blog-card__meta__item">
                    <a href="">
                      <i className="icon-user" />
                      by Admin
                    </a>
                  </li>
                  <li className="blog-card__meta__item">
                    <a href="">
                      <i className="icon-comments" />2 Comments
                    </a>
                  </li>
                </ul>
              </div>
              <div className="blog-three__card__item">
                <div className="blog-card__date">
                  <span className="blog-card__date__day">20</span>{" "}
                  <span className="blog-card__date__month">June</span>
                </div>
                <h3 className="blog-card__title">
                  <a href="blog-details-right.html">
                    cupidatat nonproident, sunt in culpa qui officia deserunt
                  </a>
                </h3>
                <ul className="blog-card__meta list-unstyled">
                  <li className="blog-card__meta__item">
                    <a href="">
                      <i className="icon-user" />
                      by Admin
                    </a>
                  </li>
                  <li className="blog-card__meta__item">
                    <a href="">
                      <i className="icon-comments" />2 Comments
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="blog-three__card__item__thumb wow fadeInRight"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <img src="/images/blog/blog-l-2-1.jpg" alt="blog image" />
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="blog-three__item wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="300ms"
          >
            <div
              className="blog-three__item__bg"
              style={{
                backgroundImage:
                  "url(/images/shapes/blog-card-bg-1-1.png)"
              }}
            />
            <div className="blog-three__item__image">
              <img src="/images/blog/blog-2-1.jpg" alt="wallox image" />
              <a
                href="blog-details-right.html"
                className="blog-three__item__image__item"
              >
                <div className="blog-three__item__hover__box blog-three__item__hover__box--1" />
                <div className="blog-three__item__hover__box blog-three__item__hover__box--2" />
                <div className="blog-three__item__hover__box blog-three__item__hover__box--3" />
                <div className="blog-three__item__hover__box blog-three__item__hover__box--4" />
              </a>
              <div className="blog-three__item__date">
                <span className="blog-three__item__date__day">20</span>{" "}
                <span className="blog-three__item__date__month">June</span>
              </div>
            </div>
            <div className="blog-three__item__content">
              <h3 className="blog-three__item__title">
                <a href="blog-details-right.html">
                  cupidatat nonproident, sunt in culpa qui officia deserunt
                </a>
              </h3>
              <ul className="blog-three__item__meta list-unstyled">
                <li className="blog-three__item__meta__item">
                  <a href="">
                    <i className="icon-user" />
                    by Admin
                  </a>
                </li>
                <li className="blog-three__item__meta__item">
                  <a href="">
                    <i className="icon-comments" />2 Comments
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="client-carousel">
      <div className="container">
        <div className="client-carousel__inner">
          <div className="row align-items-center">
            <div className="cpl-lg-3 col-md-4">
              <div className="client-carousel__left">
                <h2 className="client-carousel__text">
                  Trusted By <br /> Top Companies{" "}
                  <a href="about.html">
                    <i className="icon-up-right-arrow1" />
                  </a>
                </h2>
              </div>
            </div>
            <div className="cpl-lg-9 col-md-8">
              <div
                className="client-carousel__one wallox-owl__carousel owl-theme owl-carousel"
                data-owl-options='{
                  "items": 5,
                  "margin": 35,
                  "smartSpeed": 700,
                  "loop":true,
                  "autoplay": false,
                  "nav":false,
                  "dots":false,
                  "responsive":{
                      "0":{
                          "items":1,
                          "margin": 0
                      },
                      "360":{
                          "items":2,
                          "margin": 30
                      },
                      "575":{
                          "items":3,
                          "margin": 30
                      },
                      "768":{
                          "items":4,
                          "margin": 40
                      },
                      "992":{
                          "items": 5,
                          "margin": 40
                      },
                      "1199":{
                          "items": 6,
                          "margin": 40
                      }
                  }
                  }'
              >
                <div className="client-carousel__one__item">
                  <img
                    className="client-carousel__one__image"
                    src="/images/brand/brand-1-1.png"
                    alt="wallox image"
                  />
                  <img
                    className="client-carousel__one__hover-image"
                    src="/images/brand/brand-hover-1-1.png"
                    alt="wallox image"
                  />
                </div>
                <div className="client-carousel__one__item">
                  <img
                    className="client-carousel__one__image"
                    src="/images/brand/brand-1-2.png"
                    alt="wallox image"
                  />
                  <img
                    className="client-carousel__one__hover-image"
                    src="/images/brand/brand-hover-1-2.png"
                    alt="wallox image"
                  />
                </div>
                <div className="client-carousel__one__item">
                  <img
                    className="client-carousel__one__image"
                    src="/images/brand/brand-1-3.png"
                    alt="wallox image"
                  />
                  <img
                    className="client-carousel__one__hover-image"
                    src="/images/brand/brand-hover-1-3.png"
                    alt="wallox image"
                  />
                </div>
                <div className="client-carousel__one__item">
                  <img
                    className="client-carousel__one__image"
                    src="/images/brand/brand-1-4.png"
                    alt="wallox image"
                  />
                  <img
                    className="client-carousel__one__hover-image"
                    src="/images/brand/brand-hover-1-4.png"
                    alt="wallox image"
                  />
                </div>
                <div className="client-carousel__one__item">
                  <img
                    className="client-carousel__one__image"
                    src="/images/brand/brand-1-5.png"
                    alt="wallox image"
                  />
                  <img
                    className="client-carousel__one__hover-image"
                    src="/images/brand/brand-hover-1-5.png"
                    alt="wallox image"
                  />
                </div>
                <div className="client-carousel__one__item">
                  <img
                    className="client-carousel__one__image"
                    src="/images/brand/brand-1-6.png"
                    alt="wallox image"
                  />
                  <img
                    className="client-carousel__one__hover-image"
                    src="/images/brand/brand-hover-1-6.png"
                    alt="wallox image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>

  )
}
