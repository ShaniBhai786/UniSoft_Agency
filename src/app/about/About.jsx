import React from "react";

function About() {
  return (
    <section className="about" id="about">

      {/* About Intro */}
      <div className="about-intro">
        <h2>About UniSoft</h2>
        <p>
          UniSoft creates innovative digital solutions to help businesses grow, delivering high-quality software, modern websites, and reliable applications by combining creativity, technology, and experience.

        </p>
      </div>

      {/* Who We Are / What We Do / Why Choose Us */}
      <div className="three-qoutes">
        <div className="card">
          <h3>Who We Are</h3>
          <p>
            We are a team of passionate developers and designers dedicated to
            building modern software solutions for businesses. Our focus is to
            create reliable, scalable, and user-friendly digital products.
          </p>
        </div>

        <div className="card">
          <h3>What We Do</h3>
          <p>
            We develop websites, web applications, and custom software that
            help businesses improve their online presence and streamline their
            operations.
          </p>
        </div>

        <div className="card">
          <h3>Why Choose Us</h3>
          <p>
            We combine creativity, technology, and strategic thinking to
            deliver high-quality solutions that help our clients grow and
            succeed.
          </p>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="mission-vision">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            Our mission is to empower businesses with innovative and reliable
            software solutions that drive digital transformation and growth.
          </p>
        </div>

        <div className="vision">
          <h3>Our Vision</h3>
          <p>
            Our vision is to become a trusted technology partner for businesses
            worldwide by delivering impactful digital experiences.
          </p>
        </div>
      </div>

      {/* Technologies */}
      <div className="techs">
        <h2>Technologies We Use</h2>
        <div className="tech-list">
          <span>React</span>
          <span>Node.js</span>
          <span>JavaScript</span>
          <span>Python</span>
          <span>MongoDB</span>
          <span>HTML</span>
          <span>CSS</span>
        </div>
      </div>

      {/* Company Stats */}
      <div className="stats">
        <div className="stat">
          <h3>50+</h3>
          <p>Projects Completed</p>
        </div>

        <div className="stat">
          <h3>30+</h3>
          <p>Happy Clients</p>
        </div>

        <div className="stat">
          <h3>5+</h3>
          <p>Years Experience</p>
        </div>
      </div>

      {/* Call To Action */}
      <div className="about-cta">
        <h2>Let's Build Something Great Together</h2>
        <button><a href="#contact" >Get In Touch</a></button>
      </div>

    </section>
  );
}

export default About;