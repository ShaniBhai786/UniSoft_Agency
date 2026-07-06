"use client"
import React, { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import "../styles.css"

const NavBar = () => {
  const [nav, setNav] = useState(false)
      return (
    <>
        <nav className="navbar">
        <div className="logo">
          <div className=""><Link href="/"><Image src="/assets/logo.jpeg" alt="logo" width={50} height={50} /></Link></div>
          <div className="title"><Link href="/"><h2>UniSoft</h2></Link></div>
        </div>
            <div className="navLinks">
              <Link className="navItem" href="/">Home</Link>
              <div className="navDropdown">
                <span className="navItem">
                  About <i className="fa fa-chevron-down"></i>
                </span>
                <div className="megaMenu">
                  <div className="menuColumn">
                    <h4>About</h4>
                    <Link href="/teams">About UniSoft</Link>
                    <Link href="/pricing">About CEO</Link>
                  </div>
                  </div>
              </div>
              <Link className="navItem" href="/services">Services</Link>

              <div className="navDropdown">
                <span className="navItem">
                  More <i className="fa fa-chevron-down"></i>
                </span>
                <div className="megaMenu">
                  <div className="menuColumn">
                    <h4>Company</h4>
                    <Link href="/teams">Our Team</Link>
                    <Link href="/pricing">Pricing</Link>
                  </div>

                  <div className="menuColumn">
                    <h4>Resources</h4>
                    <Link href="/blogs">Blogs</Link>
                    <Link href="/chatbot">AI ChatBot</Link>
                  </div>

                  <div className="menuColumn">
                    <h4>Legal</h4>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <Link href="/contact">Contact</Link>
                  </div>

                </div>
              </div>

            </div>
        {nav && <div className="navLinksNav" onClick={() => setNav(!nav)}>
          <i className='fa fa-close closeBtnNav' onClick={() => setNav(!nav)}></i>
          <Link className="navItem" href="/">Home</Link>
              <div className="navDropdown">
                <span className="navItem">
                  About <i className="fa fa-chevron-down"></i>
                </span>
                <div className="megaMenu">
                  <div className="menuColumn">
                    <h4>About</h4>
                    <Link href="/teams">About UniSoft</Link>
                    <Link href="/pricing">About CEO</Link>
                  </div>
                  </div>
              </div>
              <Link className="navItem" href="/services">Services</Link>

              <div className="navDropdown">
                <span className="navItem">
                  More <i className="fa fa-chevron-down"></i>
                </span>
                <div className="megaMenu">
                  <div className="menuColumn">
                    <h4>Company</h4>
                    <Link href="/teams">Our Team</Link>
                    <Link href="/pricing">Pricing</Link>
                  </div>

                  <div className="menuColumn">
                    <h4>Resources</h4>
                    <Link href="/blogs">Blogs</Link>
                    <Link href="/chatbot">AI ChatBot</Link>
                  </div>

                  <div className="menuColumn">
                    <h4>Legal</h4>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                    <Link href="/contact">Contact</Link>
                  </div>

                </div>
              </div>
        </div>}
            <Link href="/quote" aria-label="Get a free software consultation from UniSoft"><button className="navBtn">Get Free Consultation</button></Link>
        <div className="hamBurger" onClick={() => setNav(!nav)}><i className='fa fa-bars' id='bars'></i></div>
      </nav>
    </>
  )
}

export default NavBar