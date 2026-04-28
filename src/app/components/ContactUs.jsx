import React from "react";

function ContactUs() {
  return (
    <div className="contactus" id="contact">
      <div className="contact-header">
        <h2>Contact Us</h2>
        <p>
          Have a project in mind or need a software solution? Our team at
          uniSoft is ready to help you build something amazing.
        </p>
      </div>
      <div className="contact-info">
        <div className="contact-card">
          <h3>Email</h3>
          <a href="mailto:unisoftpvt@gmail.com">unisoftpvt@gmail.com</a>
        </div>

        <div className="contact-card">
          <h3>Phone</h3>
          <a href="tel:+923053019712">+92 305 3019712 </a>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
