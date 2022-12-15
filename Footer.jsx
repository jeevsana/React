import React from "react";
import "../Styles/footer.css";

export const Footer = () => {
    return (
        <>
           <footer>
              <div className="container-fluid">
                 <div className="mapped">
                 <div className="row">
                    <div className="col-lg-6 col-12 ps-5">
                    <h2 className="footer_font">HABER<span className="small-font"> 2022 privacy policy</span></h2>
                         <ul class="icon_list">
                        <li><a href="#" class="fa fa-twitter-square iconed"></a></li>
                        <li><a href="#" class="fa fa-youtube iconed"></a></li>
                        <li><a href="#" class="fa fa-rss iconed"></a></li>
                        <li><a href="#" class="fa fa-facebook-square iconed"></a></li>
                        <li><a href="#" class="fa fa-google-plus-square iconed"></a></li>
                    </ul>
                    </div>
                    <div className="col-lg-6 col-12">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.25121098481!2d73.77408491439003!3d18.56270988738444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf559a0d1a05%3A0x71978883d86139e3!2sHaber%20(Elixa%20Technologies%20Private%20Limited)!5e0!3m2!1sen!2sin!4v1666344683241!5m2!1sen!2sin"></iframe>
                    </div>
                </div>
                 </div>
              </div>
           </footer>
                                
        </>
                                    
        );

}