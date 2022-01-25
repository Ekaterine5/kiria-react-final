import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
import Gundlibtn from "../Components/Gundlibtn";

function GundliCard(Props)
{  console.log(Props);
    return(
        <>
        <section>        
            <div className="gund-sec2-article shadow-lg p-1  bg-body rounded">
                <div className="kursebi-subject-blok">
                {/*  */}
                    <div className="subject-block  shadow-lg p-1  bg-body rounded">
                        <div className="kursebi-subjec-pic">
                            <img className="subjeck-pick" src={Props.img1} alt="" />
                        </div>
                        <div className="kurs-pers-tex">
                            <h5 className="subject-name">{Props.name1}</h5>
                            <p className="kursebi-subject">{Props.skilll}</p>
                        </div>
                        <NavLink className="button color-change1 "  to="/Main2">   TAKE COURSE</NavLink>
                        </div>
                    {/*  */}
                    <div className="subject-block  shadow-lg p-1  bg-body rounded">
                        <div className="kursebi-subjec-pic">
                            <img className="subjeck-pick" src={Props.img2} alt="" />
                        </div>
                        <div className="kurs-pers-tex">
                            <h5 className="subject-name">{Props.name2}</h5>
                            <p ></p>
                            <p className="kursebi-subject">{Props.skill2}</p>
                        </div>
                        <NavLink className="button color-change1 "  to="/Main2">   TAKE COURSE</NavLink>
                        </div>
                    <div className="subject-block  shadow-lg p-1  bg-body rounded">
                        <div className="kursebi-subjec-pic">
                            <img className="subjeck-pick" src={Props.img3} alt="" />
                        </div>
                        <div className="kurs-pers-tex">
                            <h5 className="subject-name">{Props.name3}</h5>
                            <p className="kursebi-subject">{Props.skill3}</p>
                        </div>
                        <NavLink className="button color-change1"  to="/Main2">   TAKE COURSE</NavLink>
                      </div>
                </div>
                <div className="kursebi-subject-blok">
                    <div className="subject-block  shadow-lg p-1  bg-body rounded">
                        <div className="kursebi-subjec-pic">
                            <img className="subjeck-pick" src={Props.img5} alt="" />
                        </div>
                        <div className="kurs-pers-tex">
                            <h5 className="subject-name">{Props.name4}</h5>
                            <p ></p>
                            <p className="kursebi-subject">{Props.skill4}</p>
                        </div>
                        <NavLink className="button color-change1"  to="/Main2">   TAKE COURSE</NavLink>  
                    </div>
                    <div className="subject-block  shadow-lg p-1  bg-body rounded">
                        <div className="kursebi-subjec-pic">
                            <img className="subjeck-pick" src={Props.img4} alt="" />
                        </div>
                        <div className="kurs-pers-tex">
                            <h5 className="subject-name">{Props.name5}</h5>
                            <p className="kursebi-subject">{Props.skill5}</p>
                        </div>
                        <NavLink className="button color-change1"  to="/Main2">   TAKE COURSE</NavLink>
                    </div>
                    <div className="subject-block  shadow-lg p-1  bg-body rounded">
                        <div className="kursebi-subjec-pic">
                            <img className="subjeck-pick" src={Props.img6} alt="" />
                        </div>
                        <div className="kurs-pers-tex">
                            <h5 className="subject-name">{Props.name6}</h5>
                            <p className="kursebi-subject">{Props.skill5}</p>
                        </div>
                        <NavLink className="button color-change1 "  to="/Main2">   TAKE COURSE</NavLink>
                     </div>
                </div>
               
            </div>        
        </section> 

        </>
    )
}
export default GundliCard;