import React from "react";
import Link from "next/link";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Hero2 = (props) => {
  return (
    <section className="static-hero">
      <div className="hero-container">
        <div className="hero-inner">
          <div className="container-fluid">
            <div className="row justify-content-end">
              <div className="col-lg-6">
                <div className="wpo-slide-content">
                  <div className="slide-title">
                    <h4>
                      <span>Your Perfect Stay Awaits</span> Explore Our
                      Maisonnettes
                    </h4>
                  </div>
                  <div className="clearfix"></div>
                  <div className="slide-btns">
                    <Link
                      className="theme-btn"
                      onClick={ClickHandler}
                      href="/room"
                    >
                      {" "}
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="left-img"></div>
    </section>
  );
};

export default Hero2;
