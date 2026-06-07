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
          <Link className='links' href="/">Home</Link>
          <Link className='links' href="/services">Services</Link>
          <Link className='links' href="/about">About</Link>
          <Link className='links' href="/teams">Teams</Link>
          <Link className='links' href="/pricing">Pricing</Link>
              <Link className='links' href="/contact">Contact</Link>
              <Link className='links' href="/blogs">Blogs</Link>
        </div>
        {nav && <div className="navLinksNav" onClick={() => setNav(!nav)}>
          <i className='fa fa-close closeBtnNav' onClick={() => setNav(!nav)}></i>
          <Link className='links' href="/"><i className='fa fa-home'></i><span>Home</span></Link>
          <Link className='links' href="/services"><i className='fa fa-mobile'></i><span>Services</span></Link>
          <Link className='links' href="/about"> <i className='fa fa-info-circle'></i><span>About</span></Link>
          <Link className='links' href="/teams"><i className='fa fa-users'></i><span>Teams</span></Link>
          <Link className='links' href="/pricing"><i className='fa fa-dollar'></i><span>Pricing</span></Link>
          <Link className='links' href="/contact"><i className='fa fa-phone'></i><span>Contact</span></Link>
          <Link className='links' href="/blogs"><i className='fa fa-blog'></i><span>Blogs</span></Link>
        </div>}
            <Link href="/quote" aria-label="Get a free software consultation from UniSoft"><button className="navBtn">Get Free Consultation</button></Link>
        <div className="hamBurger" onClick={() => setNav(!nav)}><i className='fa fa-bars' id='bars'></i></div>
      </nav>
    </>
  )
}

export default NavBar