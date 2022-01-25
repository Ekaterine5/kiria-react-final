import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";



function Gundlibtn()
{
    return(
        <>
         <a  href="#">
         <NavLink className="button-text "  to="/Main2">   TAKE COURSE</NavLink>
                    {/* <div className="button color-change1">TAKE A COURCE</div> */}
                </a>

        </>
    )
}
export default Gundlibtn;