import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import img1 from "../images/7.png"
import { NavLink } from "react-router-dom";

<img className="logo-image" src={img1} alt="logo" />

function Footer()
{
    return(
        <>
           <div>
        <section>
          <img className="image-footer" src={img1} alt="logo"  />
          <div className="footer-wraper1">
            <div className="footer-list">
              <ul className="footer-list1">
                <li className="list-title-footer">Our Courses</li>
                <li className="list-test-footer">Human Trafficking</li>
                <li className="list-test-footer">Leadership</li>
                <li className="list-test-footer">Cyber Crime</li>
                <li className="list-test-footer">Human Right</li>  
              </ul>
            </div>
            <div className="footer-list">
              <ul className="footer-list1">
                <li className="list-title-footer">Our Partners</li>
                <li className="list-test-footer">OSCE</li>
                <li className="list-test-footer">UN</li>
                <li className="list-test-footer">CIPOL</li>
                <li className="list-test-footer">IOM</li>  
              </ul>
            </div>
            <div className="footer-list">
              <ul className="footer-list1">
                <li className="list-title-footer">Comunity</li>
                <li className="list-test-footer">Learners</li>
                <li className="list-test-footer">Blog</li>
                <li className="list-test-footer">Technical Centere</li>
                <li className="list-test-footer">Developers</li>  
              </ul>
            </div>
            <div className="footer-list">
              <ul className="footer-list1">
                <li className="list-title-footer footer-hover">Connect</li>
              </ul>
              <div className="icon-footer-box">
                <i className="icon-footer fab fa-twitter" />
                <i className="icon-footer fab fa-facebook-f" />
                <i className="icon-footer fab fa-facebook-messenger" />
                <i className="icon-footer fab fa-linkedin-in" />
              </div>
            </div>
          </div>                           
        </section>
        <div className="copyright">
          <p>Copyright @ 2021 / EKATERINE KIRIA</p>
        </div>
      </div>

        </>
    )
}
export default Footer;