"use client"
import React, { useState } from 'react'
import Link from "next/link"
import Image from "next/image"
import "../styles.css"

const services = [
  { name: "Software Development", href: "/services/software-development", icon: "ri-code-s-slash-line" },
  { name: "Web Development", href: "/services/web-development", icon: "ri-global-line" },
  { name: "SEO Services", href: "/services/seo-services", icon: "ri-line-chart-line" },
  { name: "Digital Marketing", href: "/services/digital-marketing", icon: "ri-megaphone-line" },
  { name: "UI/UX Design", href: "/services/ui-ux-design", icon: "ri-palette-line" },
  { name: "Automation Solutions", href: "/services/automation-solutions", icon: "ri-cpu-line" },
]

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
              <div className="navDropdownWrapper">
                <span className="navItem">
                  About <i className="ri-arrow-down-s-line navArrow" />
                </span>
                <div className="navDropdownMenu">
                  <div className="">
                    <Link href="/about" className="navDropdownItem">
                      <i className="fa-solid fa-building"></i>
                      <span>UniSoft Agency</span>
                    </Link>
                  </div>
                    <div className="">
                    <Link href="/ceo" className="navDropdownItem">
                      <i className="fa-solid fa-user-tie"></i>
                      <span>CEO</span>
                    </Link>
                  </div>
                  </div>
              </div>
              {/* SERVICES DROPDOWN — pure CSS hover */}
              <div className="navDropdownWrapper">
                <Link className='links navDropTrigger' href="/services">
                  Services <i className="ri-arrow-down-s-line navArrow" />
                </Link>
                <div className="navDropdownMenu">
                  {services.map((s) => (
                    <Link key={s.href} href={s.href} className="navDropdownItem">
                      <i className={s.icon} />
                      <span>{s.name}</span>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="navDropdown">
                <span className="navItem">
                  More <i className="ri-arrow-down-s-line navArrow" />
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
        {nav && <div className="navLinksNav" >
          <i className='fa fa-close closeBtnNav' onClick={() => setNav(!nav)}></i>
              <Link className="navItem" href="/" onClick={() => setNav(!nav)}>Home</Link>
              <div className="navDropdown">
                <span className="navItem">
                  About <i className="ri-arrow-down-s-line navArrow" />
                </span>
                <div className="megaMenu">
                  <div className="menuColumn" onClick={() => setNav(!nav)}>
                    <Link href="/about">About UniSoft</Link>
                    <Link href="/ceo">About CEO</Link>
                  </div>
                  </div>
              </div>
                <Link className='links' href="/services"><i className='ri-briefcase-line'></i><span>All Services</span></Link>
                {services.map((s) => (
                  <Link key={s.href} className='links' href={s.href}>
                    <i className={s.icon}></i><span>{s.name}</span>
                  </Link>
                ))}


              <div className="navDropdown">
                <span className="navItem">
                  More <i className="fa fa-chevron-down"></i>
                </span>
                <div className="megaMenu">
                  <div className="menuColumn" onClick={() => setNav(!nav)}>
                    <h4>Company</h4>
                    <Link href="/teams">Our Team</Link>
                    <Link href="/pricing">Pricing</Link>
                  </div>

                  <div className="menuColumn" onClick={() => setNav(!nav)}>
                    <h4>Resources</h4>
                    <Link href="/blogs">Blogs</Link>
                    <Link href="/chatbot">AI ChatBot</Link>
                  </div>

                  <div className="menuColumn" onClick={() => setNav(!nav)}>
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