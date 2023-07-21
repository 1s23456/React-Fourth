import React from "react";
import { Link } from "react-router-dom";

function LinkCompo(){
              return(
                            <div className="main">
                                          <Link to='/'>Home</Link>
                                          <Link to='/student'>Students</Link>
                                          <Link to='/contact'>Contact Us</Link>
                            </div>
              )
}

export default LinkCompo;