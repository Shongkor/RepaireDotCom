import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4>Repaire Dot Com</h4>
            <h5 className="list-unstyled">
              <li>342-420-6969</li>
              <li>Dhaka, Bangladesh</li>
              <li>183/21 Mohakhali Dhaka</li>
            </h5>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4>Important Links</h4>
            <ui className="list-unstyled">
              <li><a href="facebook.com">Facebook</a></li>
              <li><a href="fixoriya.com">Website Link</a></li>
              <li><a href="youtube.com">Youtube</a></li>
            </ui>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4 className="mx-auto">Services Links</h4>
            <ui className="list-unstyled">
              <li><Link to="/services">Services</Link></li>
              <Link to="/review">Review</Link>
              
            </ui>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} THICC MEMES | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;