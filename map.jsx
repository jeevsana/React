import React from "react";
import "../Styles/map.css";

export const Map = ()=>{

     return(
      <>
      <section class="map">
            <div class="container-fluid p-0">
                    <div class="map">
                <div class="row">
                        <div class="col-lg-4 col-sm-4 col-xs-12 map1">
                            <span class="fa fa-map-marker"></span>
                            <address className="address">New York 9870 St Vincent Glasgow</address>
                        </div>
                        <div class="col-lg-4 col-sm-4 col-xs-12 map2">
                            <span class="fa fa-envelope"></span>
                            <a href="mailto:" className="address">contact@demolink.org</a>
                        </div>
                        <div class="col-lg-4 col-sm-4 col-xs-12 map3">
                            <span class="fa fa-phone"></span>
                            <dl>
                                <dt className="address">Call Us:</dt>
                                <dd><a href="callto:#" className="address">+1 800 603 6035</a></dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
     );
}