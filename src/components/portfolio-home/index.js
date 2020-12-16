import React from "react";
import "./style.scss";
import '../portfolio-home/responsive-home.scss'
export default () => {
  return (
    <>
      <div className="col-md-3"></div>
      <div className="usman">
        <div className="col-md-10 home-main">
          <div className="banner">
            <div className="main-heading">
              <h1>
                usman{" "}
                <span
                  className="yy"
                  style={{ color: "#00A3E1", fontWeight: 900 }}
                >
                  naveed
                </span>{" "}
              </h1>
            </div>
          </div>
          {/* #usman naveed */}
          <div className="animation">
            <div class="header-caption" id="page-top">
              {/* <!-- type headline start--> */}
              <h3 class="cd-headline clip is-full-width">
                <span>I'm &nbsp;</span>
                <span class="cd-words-wrapper">
                  <b class="is-visible"> Frontend Developer.</b>
                  <b class="is-hidden">Electronics Engineer.</b>
                </span>
              </h3>
              {/* <!-- type headline end --> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
