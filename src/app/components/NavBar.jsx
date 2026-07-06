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
          <div><Link href="/"><Image src="/assets/logo.jpeg" alt="logo" width={50} height={50} /></Link></div>
          <div className="title"><Link href="/"><h2>UniSoft</h2></Link></div>
        </div>

        {/* DESKTOP LINKS */}
        <div className="navLinks">
          <Link className='links' href="/">Home</Link>

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

          <Link className='links' href="/about">About</Link>
          <Link className='links' href="/teams">Teams</Link>
          <Link className='links' href="/ceo">CEO</Link>
          <Link className='links' href="/pricing">Pricing</Link>
          <Link className='links' href="/contact">Contact</Link>
          <Link className='links' href="/blogs">Blogs</Link>
          <Link className='links' href="/privacy-policy">Privacy Policy</Link>
        </div>

        {/* MOBILE MENU */}
        {nav && (
          <div className="navLinksNav" onClick={() => setNav(false)}>
            <i className='fa fa-close closeBtnNav' onClick={() => setNav(false)}></i>
            <Link className='links' href="/"><i className='fa fa-home'></i><span>Home</span></Link>
            <Link className='links' href="/services"><i className='ri-briefcase-line'></i><span>All Services</span></Link>
            {services.map((s) => (
              <Link key={s.href} className='links' href={s.href}>
                <i className={s.icon}></i><span>{s.name}</span>
              </Link>
            ))}
            <Link className='links' href="/about"><i className='fa fa-info-circle'></i><span>About</span></Link>
            <Link className='links' href="/teams"><i className='fa fa-users'></i><span>Teams</span></Link>
            <Link className='links' href="/ceo"><i className='fa fa-user-tie'></i><span>CEO</span></Link>
            <Link className='links' href="/pricing"><i className='fa fa-dollar'></i><span>Pricing</span></Link>
            <Link className='links' href="/contact"><i className='fa fa-phone'></i><span>Contact</span></Link>
            <Link className='links' href="/blogs"><i className='fa fa-blog'></i><span>Blogs</span></Link>
            <Link className='links' href="/privacy-policy"><i className='fa fa-shield'></i><span>Privacy Policy</span></Link>
          </div>
        )}

        <Link href="/quote" aria-label="Get a free software consultation from UniSoft">
          <button className="navBtn">Get Free Consultation</button>
        </Link>
        <div className="hamBurger" onClick={() => setNav(!nav)}>
          <i className='fa fa-bars' id='bars'></i>
        </div>
      </nav>
    </>
  )
}

export default NavBar
