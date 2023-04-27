import React from 'react'
import Img1 from '../../Assets/images/profilepic.jpg'
import './style.scss'
import '../../Assets/style/mainstyle.scss'
import '../Portfolio-sidnav/responsive.scss'
export default()=>{
    const openMenu = () => {
        document.querySelector(".sidebar").classList.add("open");
    }
    const closeMenu = () => {
        document.querySelector(".sidebar").classList.remove("open");
    }
    return(
        <>
        <div className="col-md-2 side-nav-main">
            <div className="profile-pic">
                <img className="pic" src={Img1} alt="profile"/>
              <div className="heading"><h1>Usman Naveed</h1></div>  
            </div>
            <div className="contents ">
                <ul className="font-18 ">
                    <li ><i className="lnr lnr-home"></i><a href="/">HOME</a></li>
                    <li><i className="lnr lnr-user"></i><a href="/aboutme">ABOUT ME</a></li>
                    <li><i className="lnr lnr-license"></i><a href="/resume">RESUME</a></li>
                    <li><i className="lnr lnr-briefcase"></i><a href="/portfolio">My Projects</a></li>
                    <li><i className="lnr lnr-envelope"></i>CONTACT</li>
                </ul>
            </div>
            <div className="social-icons mt-5 row">
                <li><a href="https://www.facebook.com/usman.naveed.7374/"><i class="fab fa-facebook-square"></i></a></li>
                <li><a href="https://www.instagram.com/usmann_2/"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://github.com/UsmanNaveed896"><i class="fab fa-github"></i></a></li>
            </div>
            <div className="para">
            <p>ALL RIGHT RESERVED</p>
            </div>
        </div>


                                        {/* Mobile view Side nav */}
                 <div className="conatiner-fluid header-mobile-view">
                <div className="header-content">
               <div className="heading  clr-white"  ><h3>USMAN NAVEED</h3></div> 
                    <div className="brand ">
                       <button className="brand-button" onClick={openMenu}>&#9776;</button>
                    </div>
                </div>
            </div>
            <div className="sidebar">
               <div className="my-img"><img className="mob-img" src={Img1} alt="ssd"/></div> 
                <div className="close-button">
                    <button className="sidebar-close-button" onClick={closeMenu}>x</button>
                </div>
                <div className="contents ">
                <ul className="font-12 ">
                    <li ><i className="lnr lnr-home"></i><a href="/">HOME</a></li>
                    <li><i className="lnr lnr-user"></i><a href="/aboutme">ABOUT ME</a></li>
                    <li><i className="lnr lnr-license"></i><a href="/resume">RESUME</a></li>
                    <li><i className="lnr lnr-briefcase"></i><a href="/portfolio">PORTFOLIO</a></li>
                    <li><i className="lnr lnr-envelope"></i>CONTACT</li>
                </ul>
            </div>
            <div className="social-icons  row">
                <li><a href="https://www.facebook.com/usman.naveed.7374/"><i class="fab fa-facebook-square"></i></a></li>
                <li><a href="https://www.instagram.com/usmann_2/"><i class="fab fa-instagram"></i></a></li>
                <li><a href="https://github.com/UsmanNaveed896"><i class="fab fa-github"></i></a></li>
            </div>
            <div className="para font-12">
            <p>ALL RIGHT RESERVED</p>
            </div>

            </div>
        </>
    )
}