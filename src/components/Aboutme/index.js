import React from "react";
import "./style.scss";
import "../../Assets/style/mainstyle.scss";
import '../Aboutme/responsive-about.scss'
import Img1 from '../../Assets/images/react.png'
import Img2 from '../../Assets/images/next.png'
import Img3 from '../../Assets/images/html.png'
import Img4 from '../../Assets/images/nodejs.png'
export default () => {
  return (
    <>
      <div className="about-me col-md-10">
        <div className="container information d-flex justify-cont-bet ">
          <div className="about-heading clr-blue f-w-700 font-40 mt-5">
            About Me
          </div>
          <div className="icon clr-blue mt-5 ">
            <i className="lnr lnr-user font-40"></i>
          </div>
        </div>
        <div className="personal-info d-flex container mt-5">
          <div className="col-md-8 dev-objective">
            <h3>Frontend Web Developer</h3>
            <p>
              I am Frontend Developer interested in working for a stable company
              that will encourage my growth and development to be the most
              efficient and effective employee I can possibly be.
            </p>
            <h3 className="mt-5">Electrical Electronics Engineer</h3>
            <p>
              To be able to work in a highly organized environment and
              contribute my expertise and knowledge in electrical processes and
              applications such as designing, testing, troubleshooting, and
              modifying electrical equipments
            </p>
          </div>
          <div className="col-md-5 my-info">
            <h3>Personal Information</h3>
            <p>
              <span>Name</span> : Usman Naveed
            </p>
            <p>
              <span>Date of Birth</span> : 11-06-1995
            </p>
            <p>
              <span>Residence</span> : Abbottabad,Pakistan
            </p>
            <p>
              <span>Address</span> : Muhallah Musazai Nawanshehr,Abbottabad
            </p>
            <p>
              <span>Email</span> : Usmann207@gmail.com
            </p>
            <p>
              <span>Phone</span> : 0315-5270527
            </p>
            <p>
              <span>Freelance</span> : Available
            </p>
          </div>
        </div>
        <div className="my-services ">
          <div className="main-head d-flex clr-white">
            <div>
              <h2>SERVICES</h2>
            </div>
          </div>
          <div className="container my-offerings d-flex justify-around mt-5">
            <div className="web-development text-align">
              <i className="lnr lnr-laptop font-40 clr-blue"></i>
              <h4 className="clr-white mt-2">Web Development</h4>
              <p className="clr-white">
                Amet aspernatur delectus maxime ducimus similique Ratione
                asperiores corporis provident aut libero.
              </p>
            </div>

            <div className="web-development text-align">
              <i className="lnr lnr-eye font-40 clr-blue"></i>
              <h4 className="clr-white mt-2">Web Design</h4>
              <p className="clr-white">
                Amet aspernatur delectus maxime ducimus similique Ratione
                asperiores corporis provident aut libero.
              </p>
            </div>

            <div className="web-development text-align">
              <i className="lnr lnr-laptop-phone font-40 clr-blue"></i>
              <h4 className="clr-white mt-2">Responsive Design</h4>
              <p className="clr-white">
                Amet aspernatur delectus maxime ducimus similique Ratione
                asperiores corporis provident aut libero.
              </p>
            </div>

            <div className="web-development text-align">
              <i className="lnr lnr-camera font-40 clr-blue"></i>
              <h4 className="clr-white mt-2">PCB Designing</h4>
              <p className="clr-white">
                Amet aspernatur delectus maxime ducimus similique Ratione
                asperiores corporis provident aut libero.
              </p>
            </div>
          </div>
          <div className="my-skills">
            <div className="myskill-heading d-flex justify-center clr-white mt-5">
              <div>
                <h2 className="border-bottom">MY SKILLS</h2>
              </div>
            </div>
                      {/* OWL CAROUSEL */}
                      <div class="page-content " id="page-content">
    <div class="padding col-md-10">
        <div class="container-fluid">
            <div class=" grid-margin stretch-card">
                <div class="card">
                    <div class="card-body">
                        <div class="owl-carousel">
                            <div class="item"> <img className="round" src={Img1} alt="abc" style={{width:'100%'}}/> </div>
                            <div class="item"> <img className="round" src={Img2}  alt="abc" /> </div>
                            <div class="item"> <img className="round" src={Img3}  alt="abc" /> </div>
                            <div class="item"> <img  className="round" src={Img4}  alt="abc" /> </div>
                            <div class="item"> <img  className="round" src={Img1}  alt="abc" /> </div>
                            <div class="item">  <img className="round" src={Img2}  alt="abc" /> </div>
                            <div class="item"> <img className="round" src={Img3}  alt="abc" /> </div>
                            <div class="item"> <img className="round" src={Img4}  alt="abc" /> </div>
                            <div class="item"> <img className="round" src={Img1}  alt="abc" /> </div>
                            <div class="item"> <img className="round" src={Img2}  alt="abc" /> </div>
                            <div class="item"> <img className="round" src={Img3}  alt="abc" /> </div>
                        </div>
                    </div>
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
