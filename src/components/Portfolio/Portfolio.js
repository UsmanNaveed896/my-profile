import React from 'react'
import Tilt from 'react-parallax-tilt';
import Img1 from '../../Assets/images/web.png'
import Img2 from '../../Assets/images/california.png'
import Img3 from '../../Assets/images/designers.jpg'
import './Style.scss'
import '../../Assets/style/mainstyle.scss'
import '../Portfolio/portfoliores.scss'

export default()=>{
    return(
        <>
        <div className="portfolio col-md-10">
            <div className="container">
                <div className="portfolio-head d-flex justify-cont-bet">
               <div className=" clr-blue f-w-700 font-40 mt-5"><h1>Portfolio</h1></div>
               <div  className=" clr-blue mt-5"><i className="lnr lnr-briefcase font-40"></i></div>
                </div>
                <div className="navbar d-flex justify-center">
                    <div className="nav-content  clr-blue mt-5">
                        <h3>My Projects</h3>
                    </div>
                </div>
                <div className="my-projects row justify-cont-bet mt-5">
                    <div className="first-project">
                    <Tilt>
                        <a href="https://easemover.com/">
        <div className="image-one">
        <img className="project-image" src={Img1}  style={{width:'300px' ,height:'300px'}} alt="as" />
        </div>
        <h3 className=" clr-blue">Ease Mover</h3>
        </a>
    </Tilt>
                    </div>
                    <div className="second-project">
                    <Tilt>
                        <a href="https://qlab-site.vercel.app/">
        <div className="image-two">
        <img  className="project-image" src={Img2}  style={{width:'300px' ,height:'300px'}} alt="as" />
        </div>
        <h3 className=" clr-blue">Q Lab (Company Website)</h3>
        </a>
    </Tilt>
                    </div>
                    <div className="Third-project">
                    <Tilt>
                        <a href="https://www.stemwizardsacademia.com/">
        <div className="image-three">
        <img  className="project-image" src={Img3}  style={{width:'300px' ,height:'300px'}} alt="as" />
        </div>
        <h3 className=" clr-blue">Stem Wizards Academia</h3>
        </a>
    </Tilt>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}