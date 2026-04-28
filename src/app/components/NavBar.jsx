"use client"
import React from 'react'
import Link from "next/link"
import Image from "next/image"
import "../styles.css"

const NavBar = () => {
      return (
    <>
        <nav className="navbar">
        <div className="logo">
          <div className=""><Link href="/"><Image src="/assets/logo.jpeg" alt="logo" width={50} height={50} /></Link></div>
          <div className="title"><Link href="/"><h1>UniSoft</h1></Link></div>
        </div>
        <div className="navLinks">
          <Link href="/">Home</Link>
          <Link href="/services">Services</Link>
          <Link href="/about">About</Link>
          <Link href="/teams">Teams</Link>
          <Link href="/pricing">Pricing</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <Link href="quote"><button className="navBtn">Get Free Consultation</button></Link>
      </nav>
    </>
  )
}

export default NavBar