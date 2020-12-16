import React from "react";
import "./style.scss";
import "../../Assets/style/mainstyle.scss";
import '../Resume/responsiveresume.scss'
export default () => {
  return (
    <>
      <div className="Resume col-md-10">
        <div className="container">
          <div className="starting-content d-flex justify-cont-bet">
            <div className="heading clr-blue f-w-700 font-40 mt-5">
              <h3>My Resume.</h3>
            </div>
            <div className="resume-icon clr-blue mt-5">
              <i className="lnr lnr-license font-40"></i>
            </div>
          </div>
          <div className="front-side d-flex">
            <div className="col-md-6 experience-col">
              <div className="heading-experience d-flex justify-center mt-5 clr-white">
                <div>
                  <h3>EXPERIENCE</h3>
                </div>
              </div>

              <div className="line-experience">
                <div className="exp-one">
                <div className="span-line">
                  <ul>
                    <li>
                      <span className="line-left  clr-blue"></span>
                      <span className="to clr-white">12/2018</span>
                      <span className="from clr-white">08/2018</span>
                    </li>
                  </ul>
                </div>
                </div>
                <div className="first-experience clr-white ">
                  <h4>Internee</h4>
                  <h5 className="clr-blue">
                    National Radio Telecommunication Corporation (NRTC)
                  </h5>
                  <h4>Achievements/Tasks</h4>
                  <p>1. Auto Positioning System</p>
                  <p>2. Raspberry pi and Stepper Motor</p>
                  <p>3. Arduino and Amplifiers</p>
                </div>
              </div>
              {/* second expereince */}
              <div className="line-experience col-md-12 mt-5 ">
                <div className="exp-two">
                <div className="span-line">
                  <ul>
                    <li>
                      <span
                        className="line-left  clr-blue"
                        style={{ height: "88%", top: "21px", left: "-23px" }}
                      ></span>
                      <span
                        className="to clr-white"
                        style={{ top: "5px", left: "-95px" }}
                      >
                        04/2020
                      </span>
                      <span
                        className="from clr-white"
                        style={{ top: "284px", left: "-94px" }}
                      >
                        09/2019
                      </span>
                    </li>
                  </ul>
                </div>
                </div>
                <div className="first-experience clr-white">
                  <h4>Frontend Web Developer</h4>
                  <h5 className="clr-blue">Geeks Hub</h5>
                  <h4>Achievements/Tasks</h4>
                  <p>1. Java Script/ES6/TypeScript</p>
                  <p>2. Npm And Webpack</p>
                  <p>3. React js</p>
                  <p>4. Next js</p>
                  <p>5. Bootstrap</p>
                </div>
              </div>
            </div>
            {/* Education */}
            <div
              className="col-md-6 experience-col "
              style={{ marginLeft: "9rem" }}
            >
              <div className="heading-experience d-flex justify-center mt-5 clr-white">
                <div>
                  <h3>EDUCATION</h3>
                </div>
              </div>
              <div className="line-experience">
                <div className="edu-one">
                <div className="span-line">
                  <ul>
                    <li>
                      <span
                        className="line-left  clr-blue"
                        style={{ height: "19%", top: "160px", left: "-9px" }}
                      ></span>
                      <span className="to clr-white">02/2010</span>
                      <span className="from clr-white" style={{ top: "297px" }}>
                        02/2012
                      </span>
                    </li>
                  </ul>
                </div>
                </div>
                <div className="first-experience clr-white ">
                  <h4>Matric</h4>
                  <h5 className="clr-blue">The FF (Frontier Force) School</h5>
                  <h4>Major Subjects</h4>
                  <p>Science</p>
                </div>
              </div>
              {/* second expereince */}
              <div
                className="line-experience col-md-12"
                style={{ marginTop: "12rem" }}
              >
                <div className="edu-two">
                <div className="span-line">
                  <ul>
                    <li>
                      <span
                        className="line-left  clr-blue"
                        style={{ height: "100%", top: "-5px", left: "-23px" }}
                      ></span>
                      <span
                        className="to clr-white"
                        style={{ top: "-24px", left: "-95px" }}
                      >
                        04/2012
                      </span>
                      <span
                        className="from clr-white"
                        style={{ top: "121px", left: "-94px" }}
                      >
                        09/2014
                      </span>
                    </li>
                  </ul>
                </div>
                </div>
                <div className="first-experience clr-white">
                  <h4>Intermediate</h4>
                  <h5 className="clr-blue">
                    Modernage Public School & College
                  </h5>
                  <h4>Major Subjects</h4>
                  <p>Pre-Engineering</p>
                </div>
              </div>
              {/* Third expereince */}
              <div
                className="line-experience col-md-12"
                style={{ marginTop: "13rem" }}
              >
                <div className="edu-three">
                <div className="span-line">
                  <ul>
                    <li>
                      <span
                        className="line-left  clr-blue"
                        style={{ height: "100%", top: "-5px", left: "-23px" }}
                      ></span>
                      <span
                        className="to clr-white"
                        style={{ top: "-24px", left: "-95px" }}
                      >
                        03/2014
                      </span>
                      <span
                        className="from clr-white"
                        style={{ top: "121px", left: "-94px" }}
                      >
                        05/2018
                      </span>
                    </li>
                  </ul>
                </div>
                </div>
                <div className="first-experience clr-white">
                  <h4>Bachelors</h4>
                  <h5 className="clr-blue">
                    Comsats University Islamabad, Abbottabad Campus
                  </h5>
                  <h4>Major Subjects</h4>
                  <p>Electrical Electronics Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="my-skills">
          <div className="container">
            <div className="coding-skills d-flex ">
              <div className="coding-skill-start col-md-6">
                <div className="heading-code d-flex justify-center ">
                 <div><h3 className="f-fm border-bottom clr-white">CODING SKILLS</h3></div> 
                </div>
                {/* Progress Bars */}
                <div class="bars">
                  <h3 className="clr-white mt-5">HTML5</h3>
                  <div class="progress-outer">
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-info progress-bar-striped active"
                        style={{
                          width: "90%",
                          boxshadow: "-1px 10px 10px rgba(91, 192, 222, 0.7)",
                        }}
                      ></div>
                      <div class="progress-value">90%</div>
                    </div>
                  </div>
                  <h3 className="clr-white mt-4">CSS3</h3>
                  <div class="progress-outer">
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-success progress-bar-striped active"
                        style={{
                          width: "90%",
                          boxshadow: "-1px 10px 10px rgba(116, 195, 116,0.7)",
                        }}
                      ></div>
                      <div class="progress-value">90%</div>
                    </div>
                  </div>
                  <h3 className="clr-white mt-4">JavaScript</h3>
                  <div class="progress-outer">
                    <div class="progress">
                      <div
                        class="progress-bar progress-bar-warning progress-bar-striped active"
                        style={{
                          width: "80%",
                          boxshadow: "-1px 10px 10px rgba(240, 173, 78,0.7)",
                        }}
                      ></div>
                      <div class="progress-value">80%</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="engineering-skills col-md-6">
                <div className="eng-head d-flex justify-center">
                  <div><h3 className="clr-white text-align f-fm border-bottom">ENGINEERING SKILLS</h3></div>
                </div>
                <div class="bars">
          <h3 className="clr-white mt-5">Basic Circuit Knowledge</h3>
            <div class="progress-outer">
                <div class="progress">
                    <div class="progress-bar progress-bar-info progress-bar-striped active" style={{width:'80%', boxshadow:'-1px 10px 10px rgba(91, 192, 222, 0.7)'}}></div>
                    <div class="progress-value">80%</div>
                </div>
            </div>
            <h3 className="clr-white mt-4">PCB Designing</h3>
            <div class="progress-outer">
                <div class="progress">
                    <div class="progress-bar progress-bar-success progress-bar-striped active" style={{width:'90%', boxshadow:'-1px 10px 10px rgba(116, 195, 116,0.7)'}}></div>
                    <div class="progress-value">90%</div>
                </div>
            </div>
            <h3 className="clr-white mt-4">Problem-solving skills</h3>
            <div class="progress-outer">
                <div class="progress">
                    <div class="progress-bar progress-bar-warning progress-bar-striped active" style={{width:'80%', boxshadow:'-1px 10px 10px rgba(240, 173, 78,0.7)'}}></div>
                    <div class="progress-value">80%</div>
                </div>
            </div>
        </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
