import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import img1 from "../images/cover-01.jpg"


function GundiImg()
{
    return(
        <>
            <section className="gundi-section-1">
            <div className="section-gund-1"></div>
            <img className="gundi-picture" src={img1} alt="გუნდი" />
        </section>
        </>
    )
}
export default GundiImg;