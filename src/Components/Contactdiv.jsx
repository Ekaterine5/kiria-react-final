import React from "react";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.css";
import "/node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";



function Contactdiv()
{
    return(
        <>
         <section>
      <div className="kontact-container shadow-lg p-3 mb-5 bg-body rounded">
        <div className="contact-us-container">
          <div className="contact-us-form">
          <div className="sakontaqto-text">CONTACT INFORMATION </div>
          <div className="contact-heig "><span className="seri">Address: </span>
              <a className="link" href="https://goo.gl/maps/aZqyyLyDWgP19Bwn7" target="blank">4 Gmiri Kursantebi St
4 Gmiri Kursantebi St, T'bilisi</a></div>
<div className="contact-heig"><span class="seri">Phone:</span>
               <a className="link" href="tel:+99532222222">+995 599929115</a> </div>
              <div className="contact-heig"><span className="seri">E-Mail </span> 
              <a className="link" href="mailto:mail@gmail.com">e.kiria@gmail.com</a>
              </div>
            </div>
          <div className="form-fil-cont p-0">
            <form action="/action_page.php">
              <div className="contac-form1">
                <label htmlFor="contac-subj"></label>
                <input className="contact-form-block" type="text" id="contac-subj" name="contac-subject" placeholder="Subject..." required />
              </div>
              <div className="contac-form1">
                  <label htmlFor="contact-name"></label>
                  <input className="contact-form-block" type="text" id="contact-name" name="name/surname-contact" placeholder="Name/Surname..." required />
              </div>
              <div className="contac-form1">
                  <label htmlFor="contact-mail"></label>
                  <input className="contact-form-block" type="email" id="contact-mail" name="e-mail-contact" placeholder="E-mail..." required />
              </div>
              <div className="contac-form1">
                <label htmlFor="contact-descr"></label>
                <textarea className="contact-form-block" id="contact-descr" placeholder="Description..."></textarea>
              </div>
              <div className="contac-form1">
                <button className=" color-change1 contact-but-send" type="submit">Send
                 <i className="far fa-paper-plane"></i></button>
              </div>
            </form> 
              
          </div>
        </div>
        <div className="map-container">
         <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2974.2935558713502!2d44.807149715680836!3d41.8004361792284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40446c3b61645243%3A0x32af847c494fa242!2sMIA%20Academy!5e0!3m2!1sen!2sge!4v1623159556721!5m2!1sen!2sge" style={{width: "600px", height: "450px",border: "0",allowfullscreen: "",loading: "lazy"}} ></iframe>
         </div>
      </div>      
    </section>

        </>
    )
}
export default Contactdiv;