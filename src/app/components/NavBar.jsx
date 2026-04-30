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
          <div className="title"><Link href="/"><h1>UniSoft</h1></Link></div>
        </div>
        <div className="navLinks">
          <Link className='links' href="/">Home</Link>
          <Link className='links' href="/services">Services</Link>
          <Link className='links' href="/about">About</Link>
          <Link className='links' href="/teams">Teams</Link>
          <Link className='links' href="/pricing">Pricing</Link>
          <Link className='links' href="/contact">Contact</Link>
        </div>
        {nav && <div className="navLinksNav" onClick={() => setNav(!nav)}>
          <Link className='links' href="/">Home</Link>
          <Link className='links' href="/services">Services</Link>
          <Link className='links' href="/about">About</Link>
          <Link className='links' href="/teams">Teams</Link>
          <Link className='links' href="/pricing">Pricing</Link>
          <Link className='links' href="/contact">Contact</Link>
        </div>}
        <Link href="quote"><button className="navBtn">Get Free Consultation</button></Link>
        <i className='fa fa-bars' id='bars' onClick={() => setNav(!nav)}></i>
      </nav>
    </>
  )
}

export default NavBar