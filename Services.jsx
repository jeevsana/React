import React from "react";
import {Testax} from "./Testax"
import "../Styles/services.css"

export const Services = ()=>{
    return(
        <>
        <section className="services">
            <div className="container">
                {/* <div>
                    <h2 className="services_head">Advice on how to make wise investments</h2>
                    <p className="para_head">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                        eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip </p>
                </div> */}
                <div className="row">
                    <testax/>
                </div>
            </div>
              <div className="container1">
                <div className="row">
                    <div className="col col-sm-12">
                    <h2 style={{textAlign:"center"}}> ADVICE ON HOW TO MAKE WISE INVESTMENTS </h2>
                    <p style={{textAlign:"center", paddingLeft:90, paddingRight:90}}> 
                    If you have no experience in investing, or you do not want to risk, and would like to get a reliable tool and a guaranteed source of income, leave it to the professionals.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col col-sm-4">
                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-advice1.jpg"></img>
                        <div className="card-body" style={{textAlign:"center"}}>
                        <p><h3>Assets of investors</h3>
                                All operations of the company's projects are maintained at the expense of assets of investors.</p>
                            <div className="card-text">
                            <i class="fa-sharp fa-solid fa-circle-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-4">
                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-advice2.jpg" ></img>
                        <div className="card-body" style={{textAlign:"center"}}>
                            <div className="card-text">
                                <p><h3>Directions</h3>
                                The team works in two directions: portfolio investment, where is the lowest risk, and investments in startups.</p>
                                <i class="fa-sharp fa-solid fa-circle-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                    <div className="col col-sm-4">
                        <img src="https://template55984.motopreview.com/mt-demo/55900/55984/mt-content/uploads/2015/11/mt-0239-home-advice3.jpg"></img>
                        <div className="card-body">
                            <div className="card-text" style={{textAlign:"center"}}>
                                <p><h3>Support</h3>
                                If you have a question, you can always call our hotline, and operators will be happy to help you!</p>
                                <i class="fa-sharp fa-solid fa-circle-arrow-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </section>
        </>
    )
}