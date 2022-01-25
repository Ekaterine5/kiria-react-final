import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";



function sighindiv()
{
    return(
        <>
         ;<div className="video-container">
  <div className="s-form-left-block">
    <h3 className="video-title"> Sign In</h3>
    <form className="s-wraper" action="#">
      <div className="r-div">
        <label className="laber-User" htmlFor="username">
          Username
        </label>
        <input
          className="r-input-block"
          type="text"
          id="username"
          name="username"
          placeholder="Enter your username.."
          required
        />
      </div>
      <div className="r-div">
        <label className="laber-User" htmlFor="password">
          Password
        </label>
        <input
          className="r-input-block"
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password.."
          required
        />
      </div>
      <input className="r-submit" type="submit" defaultValue="Sign in" />
    </form>
  </div>
  <div className="video-wraper">
    <iframe
      className="video-size"
      width={560}
      height={315}
      src="https://www.youtube.com/embed/4g7LrY-5_S4"
      title="YouTube video player"
      frameBorder={0}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  </div>
</div>


        </>
    )
}
export default sighindiv;